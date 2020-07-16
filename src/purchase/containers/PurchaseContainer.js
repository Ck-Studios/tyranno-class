import {useState} from "react";
import styled from "styled-components";
import SelectScheduleStage from "purchase/components/select-schedule-stage/SelectScheduleStage";
import Header from "common/components/header/Header";
import {colorSet} from "common/theme/Theme";
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
      <div className="restrict-width-640 min-h-screen m-auto column-flex justify-between"
           style={{background: colorSet.white}}>
        <div style={{paddingBottom: "42px"}}>
          <Header mode="simple"/>
          {renderStage()}
        </div>
        <div style={{padding: "0 0 53px 0"}}>
          <LightFooter/>
        </div>
      </div>
    </div>
  )
}
