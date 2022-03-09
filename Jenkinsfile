def gitUrlAuth = "https://github.com/abraralhaf/lp-next-jest.git/"


node {
 
    // stage('Load Git'){
    //         steps{
    //            git gitUrlAuth
    //            echo 'finishing setup'
    //         }
            
    // }

    stage('Build') {
        steps { 
                echo 'executing node..'
                    nodejs(nodeJSInstallationName: 'Node-16.14.0') {
                    sh ' npm install'
                    }
           }
     }
        // stage('Test'){
        //     // when{
        //     //         expression{
        //     //             BRANCH_NAME == 'master'
        //     //         }
        //     //     }
        //     steps{
        //         sh "chmod +x -R ${env.WORKSPACE}"
        //         sh 'npm run test'
        //           nodejs(nodeJSInstallationName: 'Node-16.14.0') {
        //             sh ' npm run test'
        //             }
        //         echo 'finishing test'
        //     }
        // }
        // stage('Deployment'){
        //     steps{
        //         nodejs(nodeJSInstallationName: 'Node-16.14.0') {
        //             sh 'npm run build'
        //         }
        //         echo 'finishing deployment'
              
        //     //     checkout scm

        //     //     docker.withRegistry('https://registry.hub.docker.com','dockerHub'){
        //     //         def customImage = docker.build("alhuft/webapp")
        //     //         /* push the container the custom regitry */
        //     //         customImage.push()    
        //     //    }
                
        //     }
        // }
     
    
 }
