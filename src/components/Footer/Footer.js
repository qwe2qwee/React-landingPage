import React from "react";
import imga from "./sett.png";
import Form from "./Form";
const Footer = () => {
  return (
    <>
    <Form/>
      <div className=' h-80 w-full relative flex items-center justify-center footer'>
        <img src={imga} className='imga-f absolute z-20' alt='set' />

        <div className=' h-20  text-center absolute top-0 w-full flex justify-center items-center text-3xl text-white floot'>
          تواصل معنا
        </div>
        <div className="box-footer-up">
          <div className='flex justify-center text-center mt-12 footer-icons-up-in'>
            <div className='max-w-xs mx-7 icons-footer-up'>
              <div className='flex flex-col items-center '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='19.567'
                  height='19.121'
                  viewBox='0 0 11.567 10.121'>
                  <g
                    id='Group_144584'
                    data-name='Group 144584'
                    transform='translate(0 0)'>
                    <g id='letter'>
                      <path
                        id='Path_2'
                        data-name='Path 2'
                        d='M10.121,1H1.446A1.446,1.446,0,0,0,0,2.446v.289L5.783,5.988l5.783-3.181V2.446A1.446,1.446,0,0,0,10.121,1Z'
                        transform='translate(0 -1)'
                        fill='#fff'
                      />
                      <path
                        id='Path_3'
                        data-name='Path 3'
                        d='M5.422,8.736,0,5.7v5.277a1.446,1.446,0,0,0,1.446,1.446h8.675a1.446,1.446,0,0,0,1.446-1.446V5.7L6.145,8.736A.9.9,0,0,1,5.422,8.736Z'
                        transform='translate(0 -2.302)'
                        fill='#fff'
                      />
                    </g>
                  </g>
                </svg>

                <h2 className='text-lg font-semibold mt-2 text-white'>
                  البريد الإلكتروني
                </h2>
                <p className='text-sm text-white mt-1'>info@Digitaltrend.Sa</p>
              </div>
            </div>

            <div className='max-w-xs mx-7 icons-footer-up'>
              <div className='flex flex-col items-center '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='19.567'
                  height='19.121'
                  viewBox='0 0 10.003 10.003'>
                  <g id='phone' transform='translate(0 0)'>
                    <path
                      id='Path_23'
                      data-name='Path 23'
                      d='M9.431,6.5,7.47,5.631a.964.964,0,0,0-1.14.276h0l-.592.741A7.769,7.769,0,0,1,3.354,4.265l.74-.591a.963.963,0,0,0,.278-1.142L3.5.571A.962.962,0,0,0,2.38.03L.722.461A.966.966,0,0,0,.01,1.528,9.988,9.988,0,0,0,8.476,9.993.951.951,0,0,0,8.608,10a.965.965,0,0,0,.933-.721l.43-1.659A.958.958,0,0,0,9.431,6.5Z'
                      transform='translate(0 0.001)'
                      fill='#fff'
                    />
                  </g>
                </svg>

                <h2 className='text-lg font-semibold mt-2 text-white'>
                  الهاتف
                </h2>
                <p className='text-sm text-white mt-1'>966500566688+</p>
              </div>
            </div>

            <div className='max-w-xs mx-4 icons-footer-up'>
              <div className='flex flex-col items-center  '>
                <svg
                  id='pin-3'
                  xmlns='http://www.w3.org/2000/svg'
                  width='19.567'
                  height='19.121'
                  viewBox='0 0 10.613 12.233'>
                  <path
                    id='Path_1'
                    data-name='Path 1'
                    d='M6.344,0A5.311,5.311,0,0,0,1,5.344,5.131,5.131,0,0,0,2.6,9.16c.076.076,3.13,2.824,3.206,2.9a.8.8,0,0,0,.992,0c.076-.076,3.206-2.824,3.206-2.9a5.131,5.131,0,0,0,1.6-3.817A5.2,5.2,0,0,0,6.344,0Zm0,6.87A1.527,1.527,0,1,1,7.87,5.344,1.531,1.531,0,0,1,6.344,6.87Z'
                    transform='translate(-1)'
                    fill='#fff'
                  />
                </svg>
                <h2 className='text-lg font-semibold mt-2 text-white'>
                  العنوان
                </h2>
                <p className='text-sm text-white mt-1 w-40'>
                  الرياض , حي الحمراء شارع الشيخ حسن بن حسين مقابل الحمراء مول
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=' absolute h-12 floot bottom-0 w-4/5'>
          <div className='flex justify-center items-center h-full '>
            <div className=' mx-5 icons-footer-dwon'>
              <a href=''>
                <svg
                  id='Group_1393'
                  data-name='Group 1393'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24.194'
                  height='24.194'
                  viewBox='0 0 15.194 15.194'>
                  <g id='Group_1392' data-name='Group 1392'>
                    <circle
                      id='Ellipse_31'
                      data-name='Ellipse 31'
                      cx='7.597'
                      cy='7.597'
                      r='7.597'
                      fill='#002147'
                    />
                  </g>
                  <path
                    id='Path_972'
                    data-name='Path 972'
                    d='M2492.316,776.517c0-.044,0-.046-.047-.045a2.091,2.091,0,0,1-.331-.029,2.768,2.768,0,0,1-1.905-1.843,3.263,3.263,0,0,1-.052-.413c0-.052,0-.052-.052-.053h-1.549c-.1,0-.087-.013-.087.089q0,3.282,0,6.564a1.348,1.348,0,0,1-.017.243,1.42,1.42,0,0,1-1.689,1.16,1.911,1.911,0,0,1-.332-.109l-.026-.024c-.036-.031-.077-.056-.115-.083a1.4,1.4,0,0,1,.314-2.49,1.255,1.255,0,0,1,.5-.075,1.474,1.474,0,0,1,.329.051c.037.01.058,0,.059-.042,0-.014,0-.028,0-.042,0-.393-.015-1.251-.016-1.253,0-.113,0-.226,0-.339,0-.033-.016-.038-.043-.041a3.187,3.187,0,0,0-.611-.014,3.1,3.1,0,0,0-2.6,1.816,3.049,3.049,0,0,0-.264,1.062,3.082,3.082,0,0,0,.007.482,3.075,3.075,0,0,0,1.177,2.158.744.744,0,0,0,.161.111h0l.077.068a1.6,1.6,0,0,0,.258.158,3.127,3.127,0,0,0,3.785-.76A3.046,3.046,0,0,0,2490,780.8c.006-1.09,0-2.179,0-3.269,0-.026-.015-.063.014-.076s.044.02.066.033a4.014,4.014,0,0,0,1.317.567,3.713,3.713,0,0,0,.838.1c.089,0,.1,0,.1-.093C2492.336,777.678,2492.316,776.62,2492.316,776.517Z'
                    transform='translate(-2480.462 -771.431)'
                    fill='#fdc800'
                  />
                </svg>
              </a>
            </div>
            <div className=' mx-5 icons-footer-dwon'>
              <a href=''>
                <svg
                  id='Group_1390'
                  data-name='Group 1390'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24.194'
                  height='24.194'
                  viewBox='0 0 15.194 15.194'>
                  <circle
                    id='Ellipse_30'
                    data-name='Ellipse 30'
                    cx='7.597'
                    cy='7.597'
                    r='7.597'
                    transform='translate(0)'
                    fill='#002147'
                  />
                  <g
                    id='Group_1389'
                    data-name='Group 1389'
                    transform='translate(2.97 3.981)'>
                    <g id='Group_1388' data-name='Group 1388'>
                      <path
                        id='Path_969'
                        data-name='Path 969'
                        d='M2288.189,793.484a5.7,5.7,0,0,0,5.74-5.74q0-.131-.006-.261a4.1,4.1,0,0,0,1.006-1.045,4.023,4.023,0,0,1-1.158.318,2.025,2.025,0,0,0,.887-1.116,4.049,4.049,0,0,1-1.281.49,2.019,2.019,0,0,0-3.438,1.84,5.726,5.726,0,0,1-4.158-2.108,2.018,2.018,0,0,0,.624,2.693,2,2,0,0,1-.914-.252c0,.008,0,.017,0,.026a2.018,2.018,0,0,0,1.619,1.978,2.021,2.021,0,0,1-.911.035,2.02,2.02,0,0,0,1.885,1.4,4.048,4.048,0,0,1-2.505.863,4.129,4.129,0,0,1-.481-.028,5.714,5.714,0,0,0,3.093.906'
                        transform='translate(-2285.096 -785.493)'
                        fill='#fdc800'
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className=' mx-5 icons-footer-dwon'>
              <a href=''>
                <svg
                  id='Group_1383'
                  data-name='Group 1383'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24.194'
                  height='24.194'
                  viewBox='0 0 15.194 15.194'>
                  <circle
                    id='Ellipse_26'
                    data-name='Ellipse 26'
                    cx='7.597'
                    cy='7.597'
                    r='7.597'
                    transform='translate(0)'
                    fill='#002147'
                  />
                  <g
                    id='Group_1382'
                    data-name='Group 1382'
                    transform='translate(2.814 2.814)'>
                    <g id='Group_1381' data-name='Group 1381'>
                      <path
                        id='Path_965'
                        data-name='Path 965'
                        d='M1840.164,775.98c1.277,0,1.428.005,1.933.028a2.65,2.65,0,0,1,.889.164,1.586,1.586,0,0,1,.908.908,2.643,2.643,0,0,1,.164.888c.023.5.028.656.028,1.933s0,1.428-.028,1.933a2.641,2.641,0,0,1-.164.888,1.583,1.583,0,0,1-.908.908,2.649,2.649,0,0,1-.889.165c-.5.023-.655.028-1.933.028s-1.429-.005-1.933-.028a2.648,2.648,0,0,1-.888-.165,1.583,1.583,0,0,1-.908-.908,2.655,2.655,0,0,1-.164-.888c-.023-.5-.028-.656-.028-1.933s0-1.429.028-1.933a2.657,2.657,0,0,1,.164-.888,1.586,1.586,0,0,1,.908-.908,2.649,2.649,0,0,1,.888-.164c.5-.023.656-.028,1.933-.028m0-.862c-1.3,0-1.462.006-1.972.029a3.507,3.507,0,0,0-1.161.223,2.445,2.445,0,0,0-1.4,1.4,3.5,3.5,0,0,0-.222,1.161c-.023.51-.029.673-.029,1.972s.006,1.462.029,1.972a3.5,3.5,0,0,0,.222,1.161,2.444,2.444,0,0,0,1.4,1.4,3.5,3.5,0,0,0,1.161.222c.51.023.673.029,1.972.029s1.462-.006,1.972-.029a3.507,3.507,0,0,0,1.161-.222,2.447,2.447,0,0,0,1.4-1.4,3.506,3.506,0,0,0,.222-1.161c.023-.51.029-.673.029-1.972s-.006-1.462-.029-1.972a3.506,3.506,0,0,0-.222-1.161,2.447,2.447,0,0,0-1.4-1.4,3.51,3.51,0,0,0-1.161-.223c-.51-.023-.673-.029-1.972-.029Z'
                        transform='translate(-1835.381 -775.118)'
                        fill='#fdc800'
                      />
                      <path
                        id='Path_966'
                        data-name='Path 966'
                        d='M1858.513,795.793a2.456,2.456,0,1,0,2.456,2.456A2.456,2.456,0,0,0,1858.513,795.793Zm0,4.051a1.594,1.594,0,1,1,1.595-1.594A1.595,1.595,0,0,1,1858.513,799.844Z'
                        transform='translate(-1853.729 -793.466)'
                        fill='#fdc800'
                      />
                      <circle
                        id='Ellipse_27'
                        data-name='Ellipse 27'
                        cx='0.574'
                        cy='0.574'
                        r='0.574'
                        transform='translate(6.763 1.656)'
                        fill='#fdc800'
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className=' mx-5 icons-footer-dwon'>
              <a href=''>
                <svg
                  id='Group_1387'
                  data-name='Group 1387'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24.194'
                  height='24.194'
                  viewBox='0 0 15.194 15.194'>
                  <circle
                    id='Ellipse_29'
                    data-name='Ellipse 29'
                    cx='7.597'
                    cy='7.597'
                    r='7.597'
                    fill='#002147'
                  />
                  <g
                    id='Group_1386'
                    data-name='Group 1386'
                    transform='translate(2.983 2.623)'>
                    <path
                      id='WA_Logo'
                      data-name='WA Logo'
                      d='M.684,7.226A4.82,4.82,0,1,1,4.86,9.639h0a4.816,4.816,0,0,1-2.3-.586L0,9.723ZM2.819,8.267a4,4,0,0,0,2.039.558h0A4.005,4.005,0,1,0,1.467,6.949l.1.152-.4,1.478,1.516-.4Zm2.827-1.2a6.95,6.95,0,0,1-.686-.254A5.367,5.367,0,0,1,2.9,4.993a2.341,2.341,0,0,1-.492-1.245,1.35,1.35,0,0,1,.421-1,.442.442,0,0,1,.321-.151c.08,0,.161,0,.231,0h.027c.07,0,.158,0,.244.206.1.241.341.834.371.894a.221.221,0,0,1,.01.211.819.819,0,0,1-.12.2c-.06.07-.127.157-.181.211s-.123.125-.053.246a3.628,3.628,0,0,0,.67.834,3.288,3.288,0,0,0,.968.6c.12.06.191.05.261-.03s.3-.351.381-.472.161-.1.271-.06.7.332.823.392.2.09.231.141a1.006,1.006,0,0,1-.07.573,1.24,1.24,0,0,1-.813.572,1.971,1.971,0,0,1-.292.023A1.531,1.531,0,0,1,5.646,7.064Z'
                      fill='#fdc800'
                    />
                  </g>
                </svg>
              </a>
            </div>
            <div className=' mx-5 icons-footer-dwon'>
              <a href=''>
                <svg
                  id='Group_1385'
                  data-name='Group 1385'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24.194'
                  height='24.194'
                  viewBox='0 0 15.194 15.194'>
                  <circle
                    id='Ellipse_28'
                    data-name='Ellipse 28'
                    cx='7.597'
                    cy='7.597'
                    r='7.597'
                    fill='#002147'
                  />
                  <g
                    id='Group_1384'
                    data-name='Group 1384'
                    transform='translate(1.857 1.97)'>
                    <g id='logo'>
                      <path
                        id='bubble'
                        d='M1608.456,767.618a5.539,5.539,0,0,0-5.74,5.568,5.446,5.446,0,0,0,1.8,4.118.457.457,0,0,1,.154.327l.032,1.021a.459.459,0,0,0,.644.406l1.139-.5a.458.458,0,0,1,.307-.022,6.259,6.259,0,0,0,1.661.221,5.57,5.57,0,1,0,0-11.135Z'
                        transform='translate(-1602.716 -767.618)'
                        fill='#fdc800'
                        fillRule='evenodd'
                      />
                      <path
                        id='bolt'
                        d='M1622.741,805.278l1.686-2.675a.861.861,0,0,1,1.245-.23l1.341,1.006a.344.344,0,0,0,.415,0l1.811-1.375a.273.273,0,0,1,.4.363l-1.686,2.675a.861.861,0,0,1-1.245.23l-1.341-1.006a.344.344,0,0,0-.415,0l-1.811,1.375A.273.273,0,0,1,1622.741,805.278Z'
                        transform='translate(-1620.448 -798.082)'
                        fill='#010201'
                        fillRule='evenodd'
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className=' mx-5 icons-footer-dwon'>
              <a href=''>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24.194'
                  height='24.194'
                  viewBox='0 0 15.194 15.194'>
                  <g
                    id='Group_1391'
                    data-name='Group 1391'
                    transform='translate(0 0)'>
                    <path
                      id='Path_970'
                      data-name='Path 970'
                      d='M1377.245,757.715a7.6,7.6,0,1,0-8.784,7.5v-5.309h-1.929v-2.2h1.929v-1.674a2.681,2.681,0,0,1,2.87-2.956,11.679,11.679,0,0,1,1.7.148v1.87h-.958a1.1,1.1,0,0,0-1.238,1.186v1.425h2.107l-.337,2.2h-1.77v5.309A7.6,7.6,0,0,0,1377.245,757.715Z'
                      transform='translate(-1362.051 -750.118)'
                      fill='#002147'
                    />
                    <path
                      id='Path_971'
                      data-name='Path 971'
                      d='M1407.938,783.31l.337-2.2h-2.107v-1.425a1.1,1.1,0,0,1,1.238-1.186h.958v-1.87a11.672,11.672,0,0,0-1.7-.148,2.681,2.681,0,0,0-2.87,2.956v1.674h-1.929v2.2h1.929v5.309a7.665,7.665,0,0,0,2.374,0V783.31Z'
                      transform='translate(-1397.384 -773.517)'
                      fill='#fdc800'
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
