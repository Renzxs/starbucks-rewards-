import { useState } from 'react';
import './index.css';
import NavBar from './components/NavBar';
import Dropdown from './components/Dropdown';

import StepNo1 from './assets/stepno1.svg';
import StepNo2 from './assets/stepno2.svg';
import StepNo3 from './assets/stepno3.svg';

import Star25 from './assets/star25.svg';
import TwoB from './assets/2B.svg';

import Star40 from './assets/star40.svg';
import ICGrab from './assets/ic_grabxlaz.svg';

import Star50 from './assets/star50.svg';
import OneA from './assets/1A.svg';

import ICFreeFood from './assets/ic_freedrinkfood.svg';
import ICExclusive from './assets/ic_exclusiveperks.svg';
import ICMorderpay from './assets/ic_morderpay.svg';

import { ChevronUp, ChevronRight } from 'lucide-react';


function RewardMainPage() {
  return (
  <div className='bg-[url("./assets/xl-hero-desktop_2023.png")] w-full h-[60vh] max-md:h-[100vh] bg-left bg-cover bg-no-repeat flex justify-start items-center pl-40 max-lg:justify-center max-lg:pl-0'>
        <div className="max-lg:text-center max-lg:flex max-lg:items-center max-lg:flex-col">
          <h1 className='font-bold uppercase w-[230px] text-[30px] max-lg:'>Free coffee is a tap away</h1>
          <p className='font-medium mt-4 text-[18px]'>Join now to start collecting Stars.</p>
          <button className=' text-[18px] px-[20px] py-[5px] bg-Starbucks text-white rounded-[20px] font-semibold mt-10 mb-2'>Join now</button><br />
          <a className='underline font-medium text-[18px]' href="#">Download and join in the app</a>
          <p className='font-medium text-[18px]'>for the best experience.</p>
        </div>
    </div>
  );
}

function GettingStartedPage() {

  const [step] = useState([
    {
      id: crypto.randomUUID(),
      image: StepNo1,
      title: "Create an account",
      description: "To get started, join now. join in the app to get access to the full range of Starbucks® Rewards benefits."
    },
    {
      id: crypto.randomUUID(),
      image: StepNo2,
      title: "Order and pay how you’d like",
      description: "Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways."
    },
    {
      id: crypto.randomUUID(),
      image: StepNo3,
      title: "Collect Stars, earn Rewards",
      description: "When you collect Stars, you can redeem them for Rewards — like free food and drinks."
    },

  ]);

  return (
    <div className='p-10'>
      <div className='text-center mb-10'>
        <h1 className='text-[28px] font-bold mb-2 max-sm:text-[20px]'>Getting started is easy</h1>
        <p className='text-[15px] font-medium'>Collect Stars and get rewarded in a few steps</p>
      </div>

      <div className='flex justify-around items-center gap-10 px-20 max-lg:flex-col max-lg:px-0 max-lg:items-start'>
        {step.map((step) => {
          return (
            <div key={step.id}  className='w-[100%] flex flex-col items-center text-center mt- gap-2 max-lg:flex-row max-lg:text-start'>
              <img className='w-[51px]' src={step.image} alt={StepNo1} />
              <div className='max-lg:ml-8'>
                <h1 className='font-bold text-[18px] mb-4'>{step.title}</h1>
                <p>{step.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}


function CashOrCardPage() {

  const [collectStarsDialog] = useState([
    {
      id: crypto.randomUUID(),
      img_star: Star25,
      img_action: TwoB,
      title: "Starbucks Card or Mobile app",
      description: "Use a Starbucks Card or your mobile app to pay."
    },
    {
      id: crypto.randomUUID(),
      img_star: Star40,
      img_action: ICGrab,
      title: "Starbucks orders on GrabFood or Lazada",
      description: "Link and check-out your online orders."
    },
    {
      id: crypto.randomUUID(),
      img_star: Star50,
      img_action: OneA,
      title: "Cash, Credit/Debit card or e-Wallet",
      description: "Scan and pay at the register in one step."
    }
  ]);


  
  return (
    <div className="w-full bg-WarmWhite p-10 mt-20 pb-20">
      <div className='text-center mb-14'>
        <h1 className='text-[28px] font-bold mb-2 max-sm:text-[20px]'>Cash or card, you collect Stars</h1>
        <p className='text-[15px] font-medium'>No matter how you pay, you can collect Stars. Those Stars add up to (really delicous) Rewards.</p>
      </div>

      <div className='flex flex-col items-center justify-around gap-10 px-20 w-full max-sm:px-0'>
          {collectStarsDialog.map((dialog) => {
            return (
              <div key={dialog.id} className='flex justify-start align-center gap-10 max-md:gap-5 flex-1'>
                <img className="w-[150px] max-md:w-[100px] " src={dialog.img_star} alt={dialog.img_star} />
                <img className="w-[100px] max-md:w-[80px] max-sm:w-[50px]" src={dialog.img_action} alt={dialog.img_action} />
                <div className='w-96 max-md:w-[100%]'>
                  <h1 className='font-bold mb-2 text-[20px] max-md:text-[15px]'>{dialog.title}</h1>
                  <p className='font-medium max-md:text-[12px]'>{dialog.description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

function MagicalRewards() {

  const [magicalRewardsDialog] = useState([
    {
      id: crypto.randomUUID(),
      img: ICFreeFood,
      description: "Get a free drink, pastry or slice of cake with every 100 Stars you collect."
    },
    {
      id: crypto.randomUUID(),
      img: ICExclusive,
      description: "Access exclusive perks - like collecting Stars faster with Double Star Days, and a birthday treat."
    },
    {
      id: crypto.randomUUID(),
      img: ICMorderpay,
      description: "Enjoy the convenience of ordering ahead using the app."
    },

    
  ]);


  return (
    <div className='bg-HouseGreen p-10'>
      <div className='text-center'>
        <h1 className='text-[30px] font-bold text-white mb-10 max-sm:text-[25px]'>Say hello to magical Rewards.</h1>
      </div>

      <div className='flex justify-center items-center gap-10 max-md:flex-col pb-10'>
        {magicalRewardsDialog.map((dialog) => {
          return (
            <div key={dialog.id} className='flex flex-col justify-center items-center gap-6 flex-1'>
              <img className='w-[150px] max-sm:w-[100px]' src={dialog.img} alt={dialog.img} />
              <p className='text-white text-[18px] text-center w-[50%] font-medium max-sm:w-full'>{dialog.description}</p>
            </div>
          );
        })}
      </div>

    </div>
  );
}

function FrequentlyAskedQ() {
  const [questions, setQuestion] = useState([
    {
      id: crypto.randomUUID(),
      title: "How do I earn a Star?",
      description: "Starting October 17, 2023, you can collect Stars by paying with your registered Starbucks card (or your registered Card in the mobile app) or thru other payment methods like cash, credit/debit cards, select e-wallets, Starbucks gift certificate or Starbucks e-Gift. You will collect 1 Star for every Php25 spent on beverage, food or merchandise purchased from our stores using a Starbucks Card. Pay with cash, credit/debit cards, select e-wallets, Starbucks gift certificate or Starbucks e-Gift and you can collect 1 Star for every Php50 spent. Stars cannot be earned on purchases of gift certificate, Starbucks Cards or Starbucks Card reloads."
    },
    {
      id: crypto.randomUUID(),
      title: "What rewards can I redeem with Stars?",
      description: "Every 100 Stars you collect converts to a Reward Voucher that can be used to redeem your choice of a handcrafted beverage of any size (excluding premium Starbucks Reserve coffee and ice cream beverages) or a food item from our bakery and cake menu. Add-ons in beverages will be paid for by the member. Only 1 reward can be redeemed per transaction."
    },
    {
      id: crypto.randomUUID(),
      title: "Do Stars expires?",
      description: "Every 100 Stars you collect converts to a Reward Voucher that can be used to redeem your choice of a handcrafted beverage of any size (excluding premium Starbucks Reserve coffee and ice cream beverages) or a food item from our bakery and cake menu. Add-ons in beverages will be paid for by the member. Only 1 reward can be redeemed per transaction."
    },
    {
      id: crypto.randomUUID(),
      title: "Do Rewards Voucher expire?",
      description: "Every 100 Stars you collect converts to a Reward Voucher that can be used to redeem your choice of a handcrafted beverage of any size (excluding premium Starbucks Reserve coffee and ice cream beverages) or a food item from our bakery and cake menu. Add-ons in beverages will be paid for by the member. Only 1 reward can be redeemed per transaction."
    },
  ]);

  return (
    <div className='w-full bg-WarmWhite p-20 h-fit max-sm:p-10 flex flex-col justify-center items-center'>
      <div className='w-[60%] border-b-2 border-gray-300 pb-16 mb-10 max-lg:w-[100%] '>
        <h1 className='text-[30px] font-medium mb-10'>Frequently Asked Questions</h1>
        <div className='border-2 border-gray-300 py-[2px] rounded-md'>
            {questions.map((question) => {
                return (
                  <Dropdown key={question.id} id={question.id} title={question.title} description={question.description}/>
                )
              })}
        </div>
      </div>

      <div className='flex flex-col justify-start items-start w-[50%] max-lg:w-[90%]'> 
        <h1 className='text-[30px] font-medium mb-2'>More Questions?</h1>
        <p className='font-medium text-[18px] mb-4'>We want to help in any way we can. We’ve answered the most commonly asked questions. <a className='font-bold underline' href="#">right over here.</a></p>
        <p className='mb-6 font-medium text-[18px]'>If you can't find what you're looking for, here's how to <a className='font-bold underline' href="#">get in touch</a> with us.</p>

        <h1 className='text-[30px] font-medium mb-2'>Terms of Use</h1>
        <p className='font-medium text-[18px] mb-4'>For full details on Stars and Starbucks® Rewards program, read our terms of use <a className='font-bold underline' href="">here</a>.</p>
        <p className='font-medium text-[18px]'>DTI Fair Trade Permit No. FTEB-177222 Series of 202</p>
      </div>
      
    </div>
  );
}

function Footer() {
  return (
    <div className='py-10 overflow-hidden z-0'>
      <div className='flex flex-wrap justify-start items-start gap-10  px-20 basis-[500px] max-sm:p-10 max-sm:flex-col relative mb-10'>
        <div className='flex-1 max-sm:w-full'>
          <div className='flex justify-between items-center w-full mb-6'>
            <h1 className='font-bold text-[30px]'>About Us</h1>
            <ChevronRight className='hidden max-sm:block'></ChevronRight>
          </div>
          <div className='max-sm:h-0 overflow-hidden'>
            <p><a className='text-[20px] font-medium text-gray-500' href="#">Our Company</a></p>
            <p><a className='text-[20px] font-medium text-gray-500' href="#">Stories and News</a></p>
            <p><a className='text-[20px] font-medium text-gray-500' href="#">Customer Service</a></p>
            <p><a className='text-[20px] font-medium text-gray-500' href="#">Careers</a></p>
          </div>
        </div>

        <div className='flex-1 max-sm:w-full'>
          <div className='flex justify-between items-center w-full mb-6'>
            <h1 className='font-bold text-[30px]'>Order Online</h1>
            <ChevronRight className='hidden max-sm:block'></ChevronRight>
          </div>
          <div className='max-sm:h-0 overflow-hidden '>
            <p><a className='text-[20px] font-medium text-gray-500' href="#">Order on the App</a></p>
            <p><a className='text-[20px] font-medium text-gray-500' href="#">Delivery</a></p>
            <p><a className='text-[20px] font-medium text-gray-500' href="#">Send eGifts</a></p>
            <p><a className='text-[20px] font-medium text-gray-500' href="#">Grap Partnership</a></p>
          </div>
        </div>

        <div className='flex-1 max-sm:w-full '>
          <div className='flex justify-between items-center w-full mb-6'>
            <h1 className='font-bold text-[30px]'>Rewards</h1>
            <ChevronRight className='hidden max-sm:block'></ChevronRight>
          </div>
          <div className='max-sm:h-0 overflow-hidden'>
            <p><a className='text-[20px] font-medium text-gray-500' href="#">My Account</a></p>
            <p><a className='text-[20px] font-medium text-gray-500' href="#">View Transactions</a></p>
            <p><a className='text-[20px] font-medium text-gray-500' href="#">Reload</a></p>
            <p><a className='text-[20px] font-medium text-gray-500' href="#">FAQs</a></p>
          </div>
        </div>

        <div  className='flex-1'>
          <h1 className='font-bold text-[30px]'><a href="">Social Impact</a></h1>
        </div>

        <div  className='flex-grow'>
          <h1 className='font-bold text-[30px]'><a href="">Promotions</a></h1>
        </div>

        <h1 className='absolute right-0 top-20 font-black text-[25px] rotate-90 max-lg:hidden'>STARBUCKS</h1>
      </div>

      <hr className='border-2 border-gray-300' />

      <div className='pt-6 px-10 text-end'>
        <p>&copy; 2024 Starbucks Coffee Company. All rights reserved.</p>
      </div>

    </div>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <RewardMainPage />
      <GettingStartedPage />
      <CashOrCardPage />
      <MagicalRewards />
      <FrequentlyAskedQ />
      <Footer />
    </>
  )
}

export default App;
