import  './aside.css'
import Button from "./buttons/buttons"
const Aside = () => {
  const btnData = [
    {
      title: "neu",
      body: "🌠🌠🌠",
      image: ""
    },
    {
      title: "more read",
      body: "",
      image: "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg"
    },
    {
      title: "neu",
      body: "🌠🌠🌠",
      image: "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg"
    }
  ]
  return (
    <div className='aside'>
            <div className="buttons">

              {btnData.map((data) => {
                if(data.image === "" ||  data.image === null) {
                    return(
                      <Button  title={data.title}>
                          {data.body}
                      </Button>
                    )
                }else if(data.body === "" ||  data.body === null) {
                    return (
                      <Button  title={data.title}>
                      <br />
                    <img width="90px" src={data.image} alt="" />
                    </Button>
                    )
                }else{
                  return (
                    <Button  title={data.title}>
                    <br />
                    {data.body}
                    <br />
                  <img width="90px" src={data.image} alt="" />
                  </Button>
                  )
                }
              })}
 
            </div> 
    </div>
  )
}

export default Aside