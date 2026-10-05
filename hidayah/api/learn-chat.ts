export default async function handler(req:Request){
 if(req.method!=="POST") return new Response(JSON.stringify({error:"Method not allowed"}),{status:405,headers:{"Content-Type":"application/json"}});
 const key=process.env.OPENAI_API_KEY; if(!key) return new Response(JSON.stringify({error:"OPENAI_API_KEY is not configured"}),{status:503,headers:{"Content-Type":"application/json"}});
 try{
  const body=await req.json() as {messages?:Array<{role:"user"|"assistant",content:string}>,context?:string};
  const messages=(body.messages||[]).slice(-10).filter(m=>m&&typeof m.content==="string");
  const sys="You are Path Companion inside Hidayah, an educational app for new Muslims. Explain clearly and patiently, define Arabic terms, distinguish agreed foundations from recognised scholarly differences, and do not invent Quran verses, hadith, citations, or consensus. Do not give personal fatwas. For marriage/divorce, inheritance, finance, health-related fasting, or other high-stakes personal questions, explain general principles and recommend a qualified scholar.";
  const payloadMessages=[{role:"system",content:sys} as any]; if(body.context) payloadMessages.push({role:"system",content:"Current lesson context:\n"+body.context.slice(0,4000)} as any); payloadMessages.push(...messages as any);
  const r=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Authorization":"Bearer "+key,"Content-Type":"application/json"},body:JSON.stringify({model:process.env.OPENAI_MODEL||"gpt-4o-mini",messages:payloadMessages,temperature:.3,max_tokens:800})});
  const d=await r.json() as any;if(!r.ok)return new Response(JSON.stringify({error:d?.error?.message||"OpenAI request failed"}),{status:502,headers:{"Content-Type":"application/json"}});
  return new Response(JSON.stringify({reply:d?.choices?.[0]?.message?.content||"No answer returned."}),{status:200,headers:{"Content-Type":"application/json"}});
 }catch{return new Response(JSON.stringify({error:"Assistant unavailable"}),{status:500,headers:{"Content-Type":"application/json"}})}
}