
    import { graphql } from 'gatsby'
  
    export const componentFragments = graphql`
       
 
      fragment Page_Accordions on WpPage_Pagecomponents_PageComponents_Accordions {
        
        accordionItem {
            content
            title
        }
    
      }
     
 
      fragment Page_Banner on WpPage_Pagecomponents_PageComponents_Banner {
        
    title
    description
  
      }
     
 
      fragment Page_GenericContent on WpPage_Pagecomponents_PageComponents_GenericContent {
        
    content
  
      }
     
 
      fragment Page_HomeHero on WpPage_Pagecomponents_PageComponents_HomeHero {
        
        backgroundImage {
            sourceUrl
            id
        }
        heading
        headingTag
        heroContent
        overlay
        paddingBottom
        paddingTop
        textAlign
        textColor
        xPosition
        yPosition
    
      }
     
 
      fragment Page_Space on WpPage_Pagecomponents_PageComponents_Space {
        
        backgroundColor
        fullWidth
        height
    
      }
    
    `
    