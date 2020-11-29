import React , {useState} from 'react'
import ArrowRightCircle from '../../static/img/arrow-right-circle.svg'
// import ProgramImage from '../../static/img/Program.jpg'

// import ProgramImageMobile from '../../static/img/Program _BG_Image_Mobile.jpg'

// function Mycard({header='Header',content='A sample test that goes',func=()=>{}}){
//     return(
//         <div className="offer__detail__tab" >
//             <h3>{header}</h3>
//             <p>{content}</p>
//             <div className="offer__detail__tab__button">
//                                             <button type="submit" className="offer__detail__tab__button--text" onClick={func}><img  className="offer__detail__tab__button--img" src={ArrowRightCircle} alt="Arrow right circle" /></button>
                                            
//                                         </div>
//         </div> 
//     )
// }

const Offer = () => {
    // const [dataHeader,setdataHeader] = useState('What do we offer?')

    // const [dataContent,setdataContent] = useState('<p>At Bump up we have custom-fit programs designed for each phase of your pregnancy journey.</p><p>From the time you start planning for a baby to helping you make your pregnancy a fit, healthy and happy one, getting you all set for labor — and not to forget, helping you bounce back to your pre-baby self! </p><p>    What more? All our programs are designed as virtual sessions giving you the flexibility to attend them from the cozy comfort of your homes!</p>   ')
    // const setBabyready = () => {
    //     setdataContent('<p>So you are talking about planning for a baby, that’s a huge step! Now, other than tossing your birth control, what do you have to do? How do you know when you are ovulating? Can you go on that trip you’ve been planning? What about spa and salon sessions, are they out of bounds? Will you miss your usual glass of wine over the weekend? Is the weighing scale showing a ‘baby-friendly’ number? Is there really a right ‘position’? Does the dad-to-be have things to watch out for?<p>    Plenty of questions, right? In this couple’s workshop we\'ll be discussing all this and more*!</p><p>    *everything non-clinical, of course.</p>')
    //     setdataHeader('Baby - Ready')
    // }
    // const setMummaStrong = () => {
    //     setdataContent('<p>A fit mom is a happy mom. Plain and simple. Our prenatal fitness program is designed to help our mummas build strength and well-being into their everyday routines. These regular, twice-a-week sessions will focus on preparing you to deal with the demands of pregnancy and labor — physically and mentally. The workouts are tailored to cover identifying your body\'s uniquer needs, allay pregnancy discomforts, keep weight gain on track, strengthen your body for labor and set the foundation for a smooth postpartum recovery.</p><p>Eating Right-- These session will also cover aspects of nutrition and diet to ensure our moms-to-be are munching on healthy, safe, wholesome food that is crucial for her health as well as the baby\'s growth and development</p><p>These sessions are high-energy, super fun, and what\'s more? You get to meet other mummas who share the very same things that are making you feel not-so-normal right now. We are all here to help you know that--"You\'ve got this"!</p><p>Our sessions are twice a week.</p><p>Get in touch to know the available batches.</p>')
    //     setdataHeader('Mumma Strong')
    // }
    // const setEverythingLabour = () => {
    //     setdataContent('<p>Labor can be happy! There, we said it. We are conditioned to believe that labor is the most painful and difficult time in a woman’s life. Yes, it comes with it’s fair share of discomforts. But it is also possible for you to have a smooth, calm and peaceful labor. </p><p>In this workshop, we’ll get you and your partner all prepped for the big day! You might be looking for answers to many things like, what goes in a hospital bag? What are the signs you should look out for in the days before labor? When should you go to the hospital —what if you are too late or too early? How do you identify real labor from false labor? Timing contractions — how do you do that? How can your partner help you get more comfortable? What is labor breathing? What are the different stages in labor — what can you expect at each stage?</p><p>‘Everything labor’ will take you through all these steps to ensure you and your partner are equipped with handy information and tips for the big day.</p>')
    //     setdataHeader('Everything labor')
    // }
    
    // const setBounceBack = () => {
    //     setdataContent('<p>Labor can be happy! There, we said it. We are conditioned to believe that labor is the most painful and difficult time in a woman’s life. Yes, it comes with it’s fair share of discomforts. But it is also possible for you to have a smooth, calm and peaceful labor. </p><p>In this workshop, we’ll get you and your partner all prepped for the big day! You might be looking for answers to many things like, what goes in a hospital bag? What are the signs you should look out for in the days before labor? When should you go to the hospital —what if you are too late or too early? How do you identify real labor from false labor? Timing contractions — how do you do that? How can your partner help you get more comfortable? What is labor breathing? What are the different stages in labor — what can you expect at each stage?</p><p>‘Everything labor’ will take you through all<p>Eager to rock that pre-baby body soon? Getting back to your workouts or even giving yourself some me-time will be a far fetched thought with all the feeding, burping, erratic sleep patterns and diaper runs. </p><p>Our ‘Bounce back’ program gives you all the flexibility you will need as a new mumma! Unable to get any baby-free time that particular day? No problem, we’ll give you options to workout with your little one! You will also have regular check-ins to track your progress and together, we’ll get you feeling your old, pre-baby self soon! </p>')
    //     setdataHeader('Bounce Back')
    // }
    // return(
    //     <section className="offer" id="offer">
    //         <div className="container">
    //             <div className="row">
    //                 <div className="program">
    //                     <img src={ProgramImage} alt='programimg' className="program__img desktop"></img>
    //                     <img src={ProgramImageMobile} alt='programimg' className="program__img mobile"></img>

    //                 <div className="offer">
    //                     <div className="offer__detail">
    //                         <Mycard header='Baby-ready' content='A pre-conception workshop' func={setBabyready} />
    //                         <Mycard header='Mumma Strong' content='A prenatal fitness program' func={setMummaStrong}/>
    //                         <Mycard header='Everything labor' content='A birth-preparedness workshop' func={setEverythingLabour}/>
    //                         <Mycard header='Bounce Back' content='A postnatal fitness program' func={setBounceBack}/>

    //                     </div>
    //                         <div className="offer__content">
    //                         <h3>{dataHeader}</h3>
    //                         <div dangerouslySetInnerHTML={{__html:dataContent}} />
    //                         </div>    
    //                     </div>
    //                     </div>

    //             </div>
    //         </div>

    //     </section>
            
        
    // )

    const defaultContent = [
        "At Bump up we have custom-fit programs designed for each phase of your pregnancy journey.",
        "From the time you start planning for a baby to helping you make your pregnancy a fit, healthy and happy one, getting you all set for labor — and not to forget, helping you bounce back to your pre-baby self!",
        "What more? All our programs are designed as virtual sessions giving you the flexibility to attend them from the cozy comfort of your homes!"
    ]

    const [contents, setContents] = useState(defaultContent)

    const offerContentList = [
        {
            id: 1,
            cardHeader: "Baby-ready",
            cardBody: "A pre-conception workshop",
            paragraph: [
                "So you are talking about planning for a baby, that’s a huge step! Now, other than tossing your birth control, what do you have to do? How do you know when you are ovulating? Can you go on that trip you’ve been planning? What about spa and salon sessions, are they out of bounds? Will you miss your usual glass of wine over the weekend? Is the weighing scale showing a ‘baby-friendly’ number? Is there really a right ‘position’? Does the dad-to-be have things to watch out for?",
                "Plenty of questions, right? In this couple’s workshop we&#39;ll be discussing all this and more*!",
                "*everything non-clinical, of course."
            ]
        },
        {
            id: 2,
            cardHeader: "Mumma Strong",
            cardBody: "A pre-conception workshop",
            paragraph: [
                "A fit mom is a happy mom. Plain and simple. Our prenatal fitness program is designed to help our mummas build strength and well-being into their everyday routines. These regular, twice-a-week sessions will focus on preparing you to deal with the demands of pregnancy and labor — physically and mentally. The workouts are tailored to cover identifying your body&#39;s uniquer needs, allay pregnancy discomforts, keep weight gain on track, strengthen your body for labor and set the foundation for a smooth postpartum recovery.",
                "Eating Right-- These session will also cover aspects of nutrition and diet to ensure our moms-to-be are munching on healthy, safe, wholesome food that is crucial for her health as well as the baby&#39;s growth and development",
                "These sessions are high-energy, super fun, and what&#39;s more? You get to meet other mummas who share the very same things that are making you feel not-so-normal right now. We are all here to help you know that--&quot;You&#39;ve got this&quot;!",
                "Our sessions are twice a week.",
                "Get in touch to know the available batches."
            ]
        },
        {
            id: 3,
            cardHeader: "Everything labor",
            cardBody: "A pre-conception workshop",
            paragraph: [
                "Labor can be happy! There, we said it. We are conditioned to believe that labor is the most painful and difficult time in a woman’s life. Yes, it comes with it’s fair share of discomforts. But it is also possible for you to have a smooth, calm and peaceful labor.",
                "In this workshop, we’ll get you and your partner all prepped for the big day! You might be looking for answers to many things like, what goes in a hospital bag? What are the signs you should look out for in the days before labor? When should you go to the hospital —what if you are too late or too early? How do you identify real labor from false labor? Timing contractions — how do you do that? How can your partner help you get more comfortable? What is labor breathing? What are the different stages in labor — what can you expect at each stage?",
                "‘Everything labor’ will take you through all these steps to ensure you and your partner are equipped with handy information and tips for the big day."
            ]
        },
        {
            id: 4,
            cardHeader: "Bounce Back",
            cardBody: "A pre-conception workshop",
            paragraph: [
                "Eager to rock that pre-baby body soon? Getting back to your workouts or even giving yourself some me-time will be a far fetched thought with all the feeding, burping, erratic sleep patterns and diaper runs.",
                "Our ‘Bounce back’ program gives you all the flexibility you will need as a new mumma! Unable to get any baby-free time that particular day? No problem, we’ll give you options to workout with your little one! You will also have regular check-ins to track your progress and together, we’ll get you feeling your old, pre-baby self soon!"
            ]
        },
    ]

    const setContent = (id) => {
        const selectedContent = offerContentList.filter(content => content.id === id)

        setContents(selectedContent[0].paragraph)

    }

    return(
        <section className="offer" id="offer">
            <div className="container offer__banner">
                <div className="row">
                    <div className="offer__wrapper">
                        <div className="offer__card-wrapper">
                            {
                                offerContentList.map(card => {
                                    return (
                                        <div className="offer__card" key={card.id}>
                                            <h3 className="offer__card-header">{card.cardHeader}</h3>
                                            <p className="offer__card-text">{card.cardBody}</p>
                                            <button className="offer__card-button" onClick={() => setContent(card.id)}>
                                                <img src={ArrowRightCircle} alt="Arrow right"/>
                                            </button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="offer__content">
                        <div className="offer__card-wrapper">
                            <div className="offer__header">
                                <h1>What do we offer?</h1>
                            </div>

                            {
                                contents.map((para, index) => {
                                    return (
                                        <div key={index} className="offer__text">
                                            <p>{para}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>

        </section>
            
        
    )
}

export default Offer;