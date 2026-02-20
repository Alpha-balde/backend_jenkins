pipeline {
    agent {
        docker {
            image 'node:24-alpine'
        }
    }

    environment {
       DB_HOST = 'localhost'
       DB_USER = 'root'
       DB_PASSWORD = 'password'
       DB_NAME = 'my_database'
    }


stages {

    stage ('install dependencies') {
        steps {
            sh 'node --version'
            sh 'npm install'
            sh 'npm install'
        }
    }

    stage ('start application')   {
        steps {
            sh 'npm start'
        }

}


}


}