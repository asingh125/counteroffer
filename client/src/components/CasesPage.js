import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import CaseCard from './CaseCard';

const cases = require('../cases.json')

const CasesPage = () => {
  // const cases = [
  //   {name: "Zero-Sum Salary", 
  //   id: "1",
  //   summary: "Negotiation on base pay between new grad and hiring manager.",
  //   instructions: "You are an employee at Google. You are a new grad negotiating your salary.",
  //   money: "$150k", 
  //   parties: "2 parties: employer and employee",
  //   role1: "Hiring Manager",
  //   role2: "New Graduate",
  //   sum1: "You're a manager at Google who's recently hired a new grad. You'd like to compensate them fairly, but the more you give out, the smaller your bonus.", 
  //   sum2: "You're a recent grad who's made it through the interview process at Google. You'd like to get as high a salary without tarnishing your reputation with your new boss.",
  //   rules: "Zero-sum game (for every dollar that one person gains, the other person has to give up). If the parties do not come to agreement, both get nothing."
  //   }
  // ]



  return (
    <div style={{margin:"0 auto", width:"70%", padding:"5%", textAlign:"left"}}>
      {cases.map(x => <CaseCard {...x}/>)}
    </div>
  )



}

export default CasesPage