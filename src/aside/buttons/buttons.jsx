import  './buttons.css'

const buttons = ({title,children}) => {
  return (
   <>
    <button>
        {title}
        {children}    
    </button>    
   </>
  )
}

export default buttons