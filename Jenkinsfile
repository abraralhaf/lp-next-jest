def gitUrlAuth = "https://github.com/abraralhaf/lp-next-jest.git/"

def gitUrlAuth = "https://github.com/abraralhaf/lp-next-jest.git/"

pipeline {
    agent any
    environment{
        CI = 'true'
    }
    tools{
        nodejs "Node-16.14.0"
    }

    stages {
        stage('Load Git'){
            steps{
               git gitUrlAuth
               echo 'finishing setup'
            }
            
        }
        
        stage('Build') {
            steps { 
                echo 'executing node..'
                sh 'npm install'
              
           }
        }
        stage('Test'){
            // when{
            //         expression{
            //             BRANCH_NAME == 'master'
            //         }
            //     }
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
