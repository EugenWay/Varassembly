import sgMail from '@sendgrid/mail';
import gql from 'graphql-tag'

const SG_API_KEY = process.env.SG_API_KEY || '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'

export function sendmail(text, subject){

    if(!SG_API_KEY){
        throw error("send grid api key now found")
    }
    console.log("sending mail")

    const FROM = 'sdrajdeep96@gmail.com';
    const TO = 'rajdeep.iitp@gmail.com';
  
    sgMail.setApiKey(SG_API_KEY)

    const msg = {
      from: FROM,
      html: text,
      subject: subject,
      text,
      to: TO
    };
    sgMail.send(msg).catch(e =>
      console.error('Email not sent', e)); 
  }


export const fetchLatestDiscussionsQuery = gql`query MyQuery {posts (limit:1){id}}`
export const fetchLastBlockNumber = gql`query MyQuery {blockNumbers(last: 1){number}}`