import jcciFooterLogo from '../assets/images/jcciFooterLogo.png'
import left_arrow from '../assets/images/left_arrow.png'

const Footer = () => {
    return (
        <>
            <div className='bg-[#1a1b1d] rounded-b-xl md:p-20 p-5'>
                <div className="flex md:flex-row flex-col-reverse gap-8 w-full md:justify-between">

                    <div className='grid grid-cols-2 md:grid-cols-3 items-center  w-full gap-4'>
                        <a className='flex flex-row-reverse items-center gap-2 text-[#b3b6bb] hover:text-mainBlue'>
                            <img className='w-3 h-3' src={left_arrow} />
                            عن المنصة
                        </a>
                        <a className='flex flex-row-reverse items-center gap-2 text-[#b3b6bb] hover:text-mainBlue'>
                            <img className='w-3 h-3' src={left_arrow} />
                            الأسئلة الشائعة
                        </a>
                        <a className='flex flex-row-reverse items-center gap-2 text-[#b3b6bb] hover:text-mainBlue'>
                            <img className='w-3 h-3' src={left_arrow} />
                            أدلة الإستخدام
                        </a>
                        <a className='flex flex-row-reverse md:col-start-3 items-center gap-2 text-[#b3b6bb] hover:text-mainBlue'>
                            <img className='w-3 h-3' src={left_arrow} />
                            تواصل معنا
                        </a>
                        {/* <h1 className='text-[#b3b6bb] hover:text-mainBlue'>تواصل معنا</h1> */}
                    </div>

                    <div className='flex justify-end w-full'>
                        <img className='w-36' src={jcciFooterLogo} />
                    </div>

                </div>

                <hr className='my-10 border-[#6e7178]' />

                <div className='flex justify-between text-[#6e7178] text-xs'>
                    <h1>© موقع اتحاد الغرف السعودية 2023</h1>
                    <div className='grid grid-cols-re md:grid-cols-2 grid-cols-1 text-right'>
                        <h1>الشروط والأحكام</h1>
                        <h1>سياسة الخصوصية</h1>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer