import {useState} from "react";
import styled from "styled-components";
import SelectScheduleStage from "purchase/components/select-schedule-stage/SelectScheduleStage";
import Header from "common/components/header/Header";
import {breakPoints, colorSet} from "common/theme/Theme";
import LightFooter from "common/components/footer/LightFooter";
import SelectPurchaseMethodStage from "purchase/components/select-purchase-method-stage/SelectPurchaseMethodStage";
import {STAGE_SET} from "purchase/common/scheme/Scheme";
import AccountPurchaseStage from "purchase/components/account-purchase-stage/AccountPurchaseStage";
import PurchaseCompleteStage from "purchase/components/purchase-complete-stage/PurchaseCompleteStage";

export default function PurchaseContainer() {
  const [purchaseStage, setPurchaseStage] = useState(STAGE_SET.selectSchedule);

  const renderStage = () => {
    if (purchaseStage === STAGE_SET.selectSchedule) {
      return <SelectScheduleStage moveNextStage={setPurchaseStage}/>
    }

    if (purchaseStage === STAGE_SET.selectPurchaseMethod) {
      return <SelectPurchaseMethodStage moveNextStage={setPurchaseStage}/>
    }

    if (purchaseStage === STAGE_SET.accountPurchase) {
      return <AccountPurchaseStage moveNextStage={setPurchaseStage}/>
    }

    if (purchaseStage === STAGE_SET.purchaseComplete) {
      return <PurchaseCompleteStage/>
    }

    return null;
  };

  return (
    <div style={{background: colorSet.gray6}} className="h-full">
      <div className="restrict-max-width-640 h-full m-auto column-flex justify-between mobile:w-full"
           style={{background: colorSet.white}}>
        <StageFrame>
          <Header mode="simple"/>
          {renderStage()}
        </StageFrame>
        <FooterFrame>
          <LightFooter/>
        </FooterFrame>
      </div>
    </div>
  )
}

const FooterFrame = styled.div`
  padding-bottom: 53px;
  
  ${breakPoints.mobile} {
    padding-bottom: 0;
  }
`;

const StageFrame = styled.div`
  padding-bottom: 42px;
  ${breakPoints.mobile} {
    padding-bottom: 55px;
  }
`;
