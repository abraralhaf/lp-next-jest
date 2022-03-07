
def gitUrlAuth = "https://${env.TOKEN}@github.com/abraralhaf/lp-next-jest.git/"

pipeline {
    agent any

    environment{
        CI = 'true'
    }
    tools{
        nodejs "node Node-16.14.0"
    }
    stages {
        stage('Setup'){
            steps{
               git gitUrlAuth
               
                echo 'finishing setup'
            }
            
        }
        stage('Build') {
            steps { 
                
                echo 'executing node..'
                sh 'npm install'
                
                echo 'executing yarn..'
                sh 'npm install yarn'
                
                
                echo 'finishing build..'
              
           }
        }
        stage('Test'){
            steps{
                sh "chmod +x -R ${env.WORKSPACE}"
                sh 'npm run test'
                
                echo 'finishing test'
            }
        }
        stage('Deployment'){
            steps{
                sh 'npm run build'
                echo 'finishing deployment'
            }
        }
    }
}
