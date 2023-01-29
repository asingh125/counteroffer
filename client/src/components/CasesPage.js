import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import CaseCard from './CaseCard';

const CasesPage = () => {
  const cases = [
    {name: "Zero-Sum Salary", 
    id: "1",
    summary: "Negotiation on base pay between new grad and hiring manager.",
    instructions: "You are an employee at Google. You are a new grad negotiating your salary.",
    money: "$150k available to give out", 
    parties: "2 parties: employer and employee",
    role1: "Hiring Manager",
    role2: "New Graduate",
    sum1: "You are a hiring manager at Google who has recently hired a new grad for your team. You would like to compensate them fairly, but you know that for every dollar you give them, your boss will take it out of your bonus.", 
    sum2: "You are a recent grad who has made it through the interview process at Google. You would like to get as high a salary as possible without tarnishing your reputation with your new manager.",
    rules: "Zero-sum game (for every dollar that one person gains, the other person has to give up). If the parties do not come to agreement, both get nothing."
    }
  ]



  return (
    <div style={{margin:"0 auto", width:"70%", padding:"5%", textAlign:"left"}}>
      {cases.map(x => <CaseCard {...x}/>)}
    </div>
  )



}

export default CasesPage