node {
  
      checkout scm

      docker.withRegistry('https://registry.hub.docker.com','dockerHub'){
      def customImage = docker.build("alhuft/webapp")
      /* push the container the custom regitry */
      customImage.push()    
      }
}