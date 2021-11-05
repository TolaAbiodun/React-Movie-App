import styled from "styled-components";


export const Content = styled.div`
  body {
    margin: 0;
    font-size: 20px;
  }

  * {
    box-sizing: border-box;
  }

  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: white;
    color: black;
    font-family: arial, sans-serif;
    overflow: hidden;
  }

  .content {
    position: relative;
    width: 600px;
    max-width: 100%;
    margin: 20px;
    background: white;
    padding: 60px 40px;
    text-align: center;
    box-shadow: -10px 10px 67px -12px rgba(0, 0, 0, 0.2);
    opacity: 0;
    animation: apparition 0.8s 1.2s cubic-bezier(0.39, 0.575, 0.28, 0.995)
      forwards;
  }
  .content p {
    font-size: 1.3rem;
    margin-top: 0;
    margin-bottom: 0.6rem;
    letter-spacing: 0.1rem;
    color: #595959;
  }
  .content p:last-child {
    margin-bottom: 0;
  }
  .content button {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    border: 3px solid #595959;
    background: transparent;
    font-size: 1rem;
    color: #595959;
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
  }

  .particle {
    position: absolute;
    display: block;
    pointer-events: none;
  }
  .particle:nth-child(1) {
    top: 51.2696493349%;
    left: 75.9493670886%;
    font-size: 27px;
    filter: blur(0.02px);
    animation: 37s floatReverse infinite;
  }
  .particle:nth-child(2) {
    top: 48.275862069%;
    left: 27.6679841897%;
    font-size: 12px;
    filter: blur(0.04px);
    animation: 39s float2 infinite;
  }
  .particle:nth-child(3) {
    top: 82.5242718447%;
    left: 12.6953125%;
    font-size: 24px;
    filter: blur(0.06px);
    animation: 31s floatReverse infinite;
  }
  .particle:nth-child(4) {
    top: 40.2948402948%;
    left: 40.4339250493%;
    font-size: 14px;
    filter: blur(0.08px);
    animation: 27s float2 infinite;
  }
  .particle:nth-child(5) {
    top: 70.5882352941%;
    left: 25.5905511811%;
    font-size: 16px;
    filter: blur(0.1px);
    animation: 27s float infinite;
  }
  .particle:nth-child(6) {
    top: 38.4236453202%;
    left: 15.8102766798%;
    font-size: 12px;
    filter: blur(0.12px);
    animation: 22s float2 infinite;
  }
  .particle:nth-child(7) {
    top: 20.6896551724%;
    left: 11.8577075099%;
    font-size: 12px;
    filter: blur(0.14px);
    animation: 32s float infinite;
  }
  .particle:nth-child(8) {
    top: 50.9803921569%;
    left: 11.811023622%;
    font-size: 16px;
    filter: blur(0.16px);
    animation: 34s float infinite;
  }
  .particle:nth-child(9) {
    top: 38.6940749698%;
    left: 66.2122687439%;
    font-size: 27px;
    filter: blur(0.18px);
    animation: 21s floatReverse infinite;
  }
  .particle:nth-child(10) {
    top: 22.4116930572%;
    left: 82.2722820764%;
    font-size: 21px;
    filter: blur(0.2px);
    animation: 21s floatReverse infinite;
  }
  .particle:nth-child(11) {
    top: 46.6585662211%;
    left: 18.5728250244%;
    font-size: 23px;
    filter: blur(0.22px);
    animation: 24s float infinite;
  }
  .particle:nth-child(12) {
    top: 30.5043050431%;
    left: 12.8331688055%;
    font-size: 13px;
    filter: blur(0.24px);
    animation: 35s float infinite;
  }
  .particle:nth-child(13) {
    top: 18.7192118227%;
    left: 23.7154150198%;
    font-size: 12px;
    filter: blur(0.26px);
    animation: 23s float infinite;
  }
  .particle:nth-child(14) {
    top: 39.5180722892%;
    left: 21.359223301%;
    font-size: 30px;
    filter: blur(0.28px);
    animation: 24s floatReverse2 infinite;
  }
  .particle:nth-child(15) {
    top: 28.2238442822%;
    left: 62.6223091977%;
    font-size: 22px;
    filter: blur(0.3px);
    animation: 22s floatReverse2 infinite;
  }
  .particle:nth-child(16) {
    top: 90.0856793146%;
    left: 21.6322517207%;
    font-size: 17px;
    filter: blur(0.32px);
    animation: 38s floatReverse2 infinite;
  }
  .particle:nth-child(17) {
    top: 4.8484848485%;
    left: 25.3658536585%;
    font-size: 25px;
    filter: blur(0.34px);
    animation: 27s float infinite;
  }
  .particle:nth-child(18) {
    top: 20.4379562044%;
    left: 59.686888454%;
    font-size: 22px;
    filter: blur(0.36px);
    animation: 36s float2 infinite;
  }
  .particle:nth-child(19) {
    top: 75.8620689655%;
    left: 49.4071146245%;
    font-size: 12px;
    filter: blur(0.38px);
    animation: 40s floatReverse infinite;
  }
  .particle:nth-child(20) {
    top: 91.064871481%;
    left: 34.4149459194%;
    font-size: 17px;
    filter: blur(0.4px);
    animation: 24s float infinite;
  }
  .particle:nth-child(21) {
    top: 33.1707317073%;
    left: 10.7843137255%;
    font-size: 20px;
    filter: blur(0.42px);
    animation: 36s floatReverse infinite;
  }
  .particle:nth-child(22) {
    top: 74.7572815534%;
    left: 22.4609375%;
    font-size: 24px;
    filter: blur(0.44px);
    animation: 35s float2 infinite;
  }
  .particle:nth-child(23) {
    top: 44.3896424168%;
    left: 72.2057368942%;
    font-size: 11px;
    filter: blur(0.46px);
    animation: 21s float infinite;
  }
  .particle:nth-child(24) {
    top: 20.3389830508%;
    left: 49.7076023392%;
    font-size: 26px;
    filter: blur(0.48px);
    animation: 40s float2 infinite;
  }
  .particle:nth-child(25) {
    top: 49.0797546012%;
    left: 46.3054187192%;
    font-size: 15px;
    filter: blur(0.5px);
    animation: 37s floatReverse2 infinite;
  }
  .particle:nth-child(26) {
    top: 12.6829268293%;
    left: 71.568627451%;
    font-size: 20px;
    filter: blur(0.52px);
    animation: 37s floatReverse2 infinite;
  }
  .particle:nth-child(27) {
    top: 49.14004914%;
    left: 61.1439842209%;
    font-size: 14px;
    filter: blur(0.54px);
    animation: 27s floatReverse2 infinite;
  }
  .particle:nth-child(28) {
    top: 65.5421686747%;
    left: 2.9126213592%;
    font-size: 30px;
    filter: blur(0.56px);
    animation: 28s float infinite;
  }
  .particle:nth-child(29) {
    top: 50.6699147381%;
    left: 8.8148873653%;
    font-size: 21px;
    filter: blur(0.58px);
    animation: 23s float infinite;
  }
  .particle:nth-child(30) {
    top: 44.3373493976%;
    left: 5.8252427184%;
    font-size: 30px;
    filter: blur(0.6px);
    animation: 31s float2 infinite;
  }
  .particle:nth-child(31) {
    top: 33.3742331288%;
    left: 34.4827586207%;
    font-size: 15px;
    filter: blur(0.62px);
    animation: 34s float2 infinite;
  }
  .particle:nth-child(32) {
    top: 10.6408706167%;
    left: 20.4479065239%;
    font-size: 27px;
    filter: blur(0.64px);
    animation: 24s float infinite;
  }
  .particle:nth-child(33) {
    top: 67.3992673993%;
    left: 27.4779195289%;
    font-size: 19px;
    filter: blur(0.66px);
    animation: 34s float infinite;
  }
  .particle:nth-child(34) {
    top: 76.2364294331%;
    left: 72.8862973761%;
    font-size: 29px;
    filter: blur(0.68px);
    animation: 36s floatReverse2 infinite;
  }
  .particle:nth-child(35) {
    top: 41.4457831325%;
    left: 28.1553398058%;
    font-size: 30px;
    filter: blur(0.7px);
    animation: 36s float2 infinite;
  }
  .particle:nth-child(36) {
    top: 88.3495145631%;
    left: 67.3828125%;
    font-size: 24px;
    filter: blur(0.72px);
    animation: 28s float2 infinite;
  }
  .particle:nth-child(37) {
    top: 46.2484624846%;
    left: 81.9348469891%;
    font-size: 13px;
    filter: blur(0.74px);
    animation: 28s floatReverse infinite;
  }
  .particle:nth-child(38) {
    top: 89.544895449%;
    left: 17.7690029615%;
    font-size: 13px;
    filter: blur(0.76px);
    animation: 27s float infinite;
  }
  .particle:nth-child(39) {
    top: 82.2521419829%;
    left: 28.5152409046%;
    font-size: 17px;
    filter: blur(0.78px);
    animation: 24s floatReverse2 infinite;
  }
  .particle:nth-child(40) {
    top: 69.864698647%;
    left: 66.14017769%;
    font-size: 13px;
    filter: blur(0.8px);
    animation: 28s float2 infinite;
  }
  .particle:nth-child(41) {
    top: 94.5717732207%;
    left: 78.7172011662%;
    font-size: 29px;
    filter: blur(0.82px);
    animation: 22s float infinite;
  }
  .particle:nth-child(42) {
    top: 66.9126691267%;
    left: 36.5251727542%;
    font-size: 13px;
    filter: blur(0.84px);
    animation: 36s float2 infinite;
  }
  .particle:nth-child(43) {
    top: 75.1219512195%;
    left: 2.9411764706%;
    font-size: 20px;
    filter: blur(0.86px);
    animation: 29s float infinite;
  }
  .particle:nth-child(44) {
    top: 44.226044226%;
    left: 3.9447731755%;
    font-size: 14px;
    filter: blur(0.88px);
    animation: 35s floatReverse infinite;
  }
  .particle:nth-child(45) {
    top: 51.5188335358%;
    left: 66.4711632454%;
    font-size: 23px;
    filter: blur(0.9px);
    animation: 25s floatReverse infinite;
  }
  .particle:nth-child(46) {
    top: 36.4083640836%;
    left: 83.9091806515%;
    font-size: 13px;
    filter: blur(0.92px);
    animation: 29s floatReverse2 infinite;
  }
  .particle:nth-child(47) {
    top: 72.2832722833%;
    left: 75.5642787046%;
    font-size: 19px;
    filter: blur(0.94px);
    animation: 40s float2 infinite;
  }
  .particle:nth-child(48) {
    top: 4.914004914%;
    left: 81.8540433925%;
    font-size: 14px;
    filter: blur(0.96px);
    animation: 22s float2 infinite;
  }
  .particle:nth-child(49) {
    top: 36.8932038835%;
    left: 61.5234375%;
    font-size: 24px;
    filter: blur(0.98px);
    animation: 34s float2 infinite;
  }
  .particle:nth-child(50) {
    top: 84.4171779141%;
    left: 20.6896551724%;
    font-size: 15px;
    filter: blur(1px);
    animation: 21s floatReverse2 infinite;
  }
  .particle:nth-child(51) {
    top: 34.8668280872%;
    left: 33.1384015595%;
    font-size: 26px;
    filter: blur(1.02px);
    animation: 25s floatReverse infinite;
  }
  .particle:nth-child(52) {
    top: 81.4545454545%;
    left: 48.7804878049%;
    font-size: 25px;
    filter: blur(1.04px);
    animation: 22s floatReverse2 infinite;
  }
  .particle:nth-child(53) {
    top: 91.8192918193%;
    left: 33.3660451423%;
    font-size: 19px;
    filter: blur(1.06px);
    animation: 32s floatReverse2 infinite;
  }
  .particle:nth-child(54) {
    top: 14.7783251232%;
    left: 28.6561264822%;
    font-size: 12px;
    filter: blur(1.08px);
    animation: 39s floatReverse infinite;
  }
  .particle:nth-child(55) {
    top: 10.6280193237%;
    left: 54.4747081712%;
    font-size: 28px;
    filter: blur(1.1px);
    animation: 24s floatReverse2 infinite;
  }
  .particle:nth-child(56) {
    top: 14.6163215591%;
    left: 7.8354554358%;
    font-size: 21px;
    filter: blur(1.12px);
    animation: 26s floatReverse infinite;
  }
  .particle:nth-child(57) {
    top: 46.6585662211%;
    left: 11.7302052786%;
    font-size: 23px;
    filter: blur(1.14px);
    animation: 23s floatReverse infinite;
  }
  .particle:nth-child(58) {
    top: 84.7746650426%;
    left: 12.7326150833%;
    font-size: 21px;
    filter: blur(1.16px);
    animation: 23s float infinite;
  }
  .particle:nth-child(59) {
    top: 70.6166868198%;
    left: 79.8442064265%;
    font-size: 27px;
    filter: blur(1.18px);
    animation: 38s float2 infinite;
  }
  .particle:nth-child(60) {
    top: 97.5369458128%;
    left: 95.8498023715%;
    font-size: 12px;
    filter: blur(1.2px);
    animation: 39s floatReverse infinite;
  }
  .particle:nth-child(61) {
    top: 17.7121771218%;
    left: 14.8075024679%;
    font-size: 13px;
    filter: blur(1.22px);
    animation: 38s float2 infinite;
  }
  .particle:nth-child(62) {
    top: 65.7004830918%;
    left: 29.1828793774%;
    font-size: 28px;
    filter: blur(1.24px);
    animation: 23s float infinite;
  }
  .particle:nth-child(63) {
    top: 65.8476658477%;
    left: 17.7514792899%;
    font-size: 14px;
    filter: blur(1.26px);
    animation: 34s float infinite;
  }
  .particle:nth-child(64) {
    top: 24.42002442%;
    left: 8.83218842%;
    font-size: 19px;
    filter: blur(1.28px);
    animation: 24s floatReverse2 infinite;
  }
  .particle:nth-child(65) {
    top: 11.8081180812%;
    left: 40.473840079%;
    font-size: 13px;
    filter: blur(1.3px);
    animation: 38s float2 infinite;
  }
  .particle:nth-child(66) {
    top: 66.4224664225%;
    left: 6.8694798822%;
    font-size: 19px;
    filter: blur(1.32px);
    animation: 38s floatReverse2 infinite;
  }
  .particle:nth-child(67) {
    top: 87.4848116646%;
    left: 27.3704789834%;
    font-size: 23px;
    filter: blur(1.34px);
    animation: 29s floatReverse infinite;
  }
  .particle:nth-child(68) {
    top: 52.3002421308%;
    left: 56.530214425%;
    font-size: 26px;
    filter: blur(1.36px);
    animation: 24s float2 infinite;
  }
  .particle:nth-child(69) {
    top: 93.3171324423%;
    left: 21.5053763441%;
    font-size: 23px;
    filter: blur(1.38px);
    animation: 36s float infinite;
  }
  .particle:nth-child(70) {
    top: 46.3625154131%;
    left: 67.2601384768%;
    font-size: 11px;
    filter: blur(1.4px);
    animation: 36s floatReverse infinite;
  }
  .particle:nth-child(71) {
    top: 38.282208589%;
    left: 54.1871921182%;
    font-size: 15px;
    filter: blur(1.42px);
    animation: 33s float2 infinite;
  }
  .particle:nth-child(72) {
    top: 11.7359413203%;
    left: 48.1335952849%;
    font-size: 18px;
    filter: blur(1.44px);
    animation: 35s float infinite;
  }
  .particle:nth-child(73) {
    top: 53.1365313653%;
    left: 12.8331688055%;
    font-size: 13px;
    filter: blur(1.46px);
    animation: 28s floatReverse2 infinite;
  }
  .particle:nth-child(74) {
    top: 25.4901960784%;
    left: 68.8976377953%;
    font-size: 16px;
    filter: blur(1.48px);
    animation: 33s floatReverse infinite;
  }
  .particle:nth-child(75) {
    top: 62.3629719854%;
    left: 80.3134182174%;
    font-size: 21px;
    filter: blur(1.5px);
    animation: 34s float2 infinite;
  }
  .particle:nth-child(76) {
    top: 51.4563106796%;
    left: 87.890625%;
    font-size: 24px;
    filter: blur(1.52px);
    animation: 27s float2 infinite;
  }
  .particle:nth-child(77) {
    top: 17.4757281553%;
    left: 72.265625%;
    font-size: 24px;
    filter: blur(1.54px);
    animation: 24s float2 infinite;
  }
  .particle:nth-child(78) {
    top: 68.4337349398%;
    left: 0.9708737864%;
    font-size: 30px;
    filter: blur(1.56px);
    animation: 30s float2 infinite;
  }
  .particle:nth-child(79) {
    top: 69.4376528117%;
    left: 64.8330058939%;
    font-size: 18px;
    filter: blur(1.58px);
    animation: 34s float2 infinite;
  }
  .particle:nth-child(80) {
    top: 18.5819070905%;
    left: 1.9646365422%;
    font-size: 18px;
    filter: blur(1.6px);
    animation: 28s float infinite;
  }

  @keyframes apparition {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(180px);
    }
  }
  @keyframes floatReverse {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-180px);
    }
  }
  @keyframes float2 {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(28px);
    }
  }
  @keyframes floatReverse2 {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-28px);
    }
  }
`;