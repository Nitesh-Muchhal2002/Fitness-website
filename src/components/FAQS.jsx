
import { FaQuestion } from 'react-icons/fa'
import { faqs } from '../Data'
import FAQ from './FAQ'
import Sectionhead from './Sectionhead'


function FAQS() {
  return (
     <section className="faqs">
        <div className="container faqs_container">
            <Sectionhead icon={<FaQuestion/>} title="FAQS"/>
            <div className="faqs_wrapper">
                {
                    faqs.map(({id,question,answer})=>{
                        return  <FAQ key={id} question={question} answer={answer}/>
                        
                    })
                }
            </div>
        </div>
     </section>
  )
}

export default FAQS