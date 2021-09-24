require 'mina/deploy'
require 'mina/git'
require 'mina/rvm'

set :repository, 'git@github.com:organizacao-abstartup-oficial/abs-integracao-vindi-front.git'

set :identity_file, ENV['IDENTIFY_FILE']
set :environment,   ENV['ENV']

set :application_name, 'abs-integracao-vindi-front'
set :user, 'abstartup'
set :node_version, 'v14.17.1'
set :nvm_path, '/etc/profile.d/nvm.sh'
set :base_path, "/var/www/#{fetch(:user)}"

if fetch(:environment) == 'staging'
  set :branch,    'develop'
  set :domain,    'sif.jera.com.br'
  set :deploy_to, "/var/www/#{fetch(:user)}/staging/front"
end

set :shared_dirs, fetch(:shared_dirs, []).push('log', 'public/system', 'tmp/pids', 'tmp/sockets')

task :remote_environment do
  unless fetch(:environment)
    raise 'You need to pass the identify file and environment, ex. mina deploy ENV=[production,staging] IDENTIFY_FILE=$HOME/ec2/key.pem'
  end

  command %(source #{fetch(:nvm_path)})
end

task log: :remote_environment do
  command %(tail -f -n 200 "#{fetch(:deploy_to)}/shared/log/#{fetch(:environment)}.log")
end

task :setup do
  in_path(fetch(:shared_path)) do
    command %(mkdir -p "#{fetch(:deploy_to)}/shared/log")
    command %(chmod g+rx,u+rwx "#{fetch(:deploy_to)}/shared/log")

    command %(mkdir -p "#{fetch(:deploy_to)}/shared/node_modules")
    command %(chmod g+rx,u+rwx "#{fetch(:deploy_to)}/shared/node_modules")

    command %(mkdir -p "#{fetch(:deploy_to)}/shared/src/db")
    command %(touch "#{fetch(:deploy_to)}/shared/src/db/database.json")

    command %(nvm install #{fetch(:node_version)})
  end
end

desc 'Deploys the current version to the server.'
task :deploy do
  deploy do
    invoke :'git:clone'
    invoke :'deploy:link_shared_paths'

    command %(echo "ENV ---> #{fetch(:environment)}")
    command %(echo "DEPLOY_TO ---> #{fetch(:deploy_to)}")
    command %(echo "SHARED PATH ---> #{fetch(:shared_path)}")
    
    command %(nvm use #{fetch(:node_version)})
    command %(npm cache clean --force)
    command %(npm config set strict-ssl false)
    command %(npm config set registry="http://registry.npmjs.org/")
    command %(npm set progress=false)
    command %(rm -rf node_modules/)
    command %(npm install)
    command %(npm run build)

    invoke :'deploy:cleanup'

  end
end
