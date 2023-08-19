import React from 'react';
import arrow from "../images/page26_27/arrow.svg"
import person from "../images/page26_27/person.svg"
import PaymentOrderBreakdown from '../Components/PaymentOrderBreakdown';
import PaymentMethodsOrder from '../Components/PaymentMethodsOrder';


const Page26 = (props) => {
  return (
    <div className='flex min-h-[920px] w-screen-xl justify-center items-center flex-wrap'>
        <div className='flex flex-wrap justify-center mt-4 ml-24 pl-24 sm:ml-0 sm:pl-0'>
          <div className='flex justify-center'>
            <div className='image'>
                <img src={arrow} alt='&lt;'/>
            </div>
            <PaymentMethodsOrder/>
          </div>
          <div className='mt-10 hidden mdl:block v-line w-[3px] h-[484.037px] bg-light-grey'></div>
          <div className='mx-4 mt-10 block mds:hidden v-line w-[400px] h-[3px] bg-light-grey relative'></div>
          <PaymentOrderBreakdown type={props.type}/>
        </div>
        <div className='absolute -bottom-10 left-0'>
          <img className='hidden xl:block w-[1100px]' src={person} alt="person" />
        </div>
    </div>
  );
};

export default Page26;