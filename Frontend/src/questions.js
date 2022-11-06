export const questions = [
  {
    question: "How to change/update the mobile number?",
    keywords: ["mobile*change", "mobile*update"],
    voice: "here are the details regarding changing mobile number.",
    reply: [
      "Regarding your query how to change phone number, you need to personally visit your base branch along with all KYC documents in Original and photocopies, Photo. Request you to please visit your Base Branch",
      "Please note that you have to visit the branch in person regarding change in personal details like address, mobile number etc.",
    ],
  },
  {
    question: "I am a NRE customer want to update the contact details?",
    keywords: ["nre*update"],
    voice: "Here are the details and links on how To change the contact details of an NRE account or customer.",
    reply: [
      "An NRE account stands for Non-Resident External account. For more benefits please visit our website Most NRIs open an NRE account to enjoy repatriation of funds without limits. A savings bank account with value added propositions and privileges to high value NRI customer. For more information please visit our website",
      <div>
        For downloading the required forms vist our{" "}
        <a href="https://www.bankofbaroda.in/download-forms">website</a> for any
        documents that are required
      </div>,
    ],
  },
  {
    question: "How can I stop a cheque payment?",
    keywords: ["cheque*stop"],
    voice: "Here are the instruction on how to stop a cheque payment and contact links have been provide for futher clarification.",
    reply: [
      "Stop payment instruction of Cheque/s by customer will be exercised immediately, unless the cheque is paid. Customer can Stop a Cheque by submitting instruction to base branch, Calling to our authorised Contact Centre, through Internet or Mobile banking applications.",
      <div>
        <a href="https://www.bankofbaroda.in/contact-us">Contact Us</a>
      </div>,
      <div>
        <a href="https://www.bankofbaroda.in/">Our main page</a>
      </div>,
    ],
  },

  {
    question: "How can I upgrade my account type?",
    keywords: ["upgrade*account", "upgrade*type"],
    voice: "For upgrading your existing account type please account your nearest branch for information and contact details have been provided below.",
    reply: [
      "Dear customer for activation of your account please contact your branch with KYC documents.",
      <div>
        <a href="https://www.bankofbaroda.in/contact-us">Contact Us</a>
      </div>,
    ],
  },

  {
    question: "How long will it take to update a change of address?",
    keywords: ["long*update", "long*update", "change*address", "long*address"],
    voice: "The bank usually takes upto 7 working days to update the address.",
    reply: [
      "For further more information on your query of How long will it take to update a change of address?, I request you to get in touch with Contact Centre 1800 102 4455/ 1800 258 4455.",
    ],
  },

  {
    question: "Is there any Health insurance available for my account?",
    keywords: ["insurance*health", "insurance*available", "insurance*account"],
    voice: "For details related to Health insurance please use the below given details and link for more information.",
    reply: [
      <div>
        Health insurance is a type of insurance that covers medical expenses
        that arise due to an illness. <br />
        <br />
        These expenses could be related to hospitalization costs, cost of
        medicines or doctor consultation fees. <br />
        <br />
        List of tie-ups for Health insurance - Star Health & Allied Insurance ;
        Niva Bupa Health Insurance.
        <br />
        <br />
      </div>,
      <div>
        Click{" "}
        <a href="https://www.bankofbaroda.in/personal-banking/insurance/standalone-health-insurance">
          here
        </a>
        {"  "}
        to know more about Products offered.
      </div>,
    ],
  },

  {
    question: "How to place a request for a new cheque book?",
    keywords: ["request*cheque*book", "request*new*cheque", "request*new*book"],
    voice: "Customer can request for a new cheque book using the following methods.",
    reply: [
      <div>
        <div>
          You can apply for cheque book through any of the below mentioned modes
        </div>
        <ul>
          <li>
            Branch Nearest{" "}
            <a href="https://www.bankofbaroda.in/locate-us/branches">Branch</a>
          </li>
          <li>From Internet Banking</li>
          <li>From ATM</li>
        </ul>
      </div>,
    ],
  },

  {
    question: "How can I place a request for account statement?",
    keywords: [
      "request*account*statement",
      "request*place*account",
      "request*place*statement",
    ],
    voice: "For requesting account statement please follow the given set of instruction.",
    reply: [
      <div>
        <div>
          You can apply for cheque book through any of the below mentioned modes
        </div>
        <ul>
          <li>
            Select ‘From Account’ in the drop down (if you are holding more than
            one account)
          </li>
          <li>
            Select the ‘from date’ and ‘to date’ and click on Email statement.
          </li>
          <li>Email will be sent to your registered email ID.</li>
        </ul>
      </div>,
    ],
  },

  {
    question: "Hey bob",
    keywords: ["bob"],
    reply: "Hi, this is your personal assistant Bobby 😁",
    voice: "Hi, this is your personal assistant Bobby",
  },
  {
    question: "What are the details required to apply for personal loan",
    keywords: ["personal*loan"],
    voice: "here are all the required details for applying a personal loan",
    reply: (
      <div>
        <strong>Requirements for digital personal loan:</strong>dsw
        <br />
        <br />
        <strong>1.</strong> valid mobile number.
        <br />
        <strong>2.</strong> aadhar number connected with mobile number.
        <br />
        <strong>3.</strong> valid pan number.
        <br />
        <strong>4.</strong> net banking credentials or digital bank statement
        for last 6 months.
        <br />
        <strong>5.</strong> web - camera for clicking picture and performing
        video kyc
        <br />
        <strong>6.</strong> itr e-filing credentials or digital itr returns for
        last 2 years (for self - employed)
        <br />
        <strong>7.</strong> gst portal credentials or digital gst returns for
        last 1 year (for self - employed)
        <br />
        <br />
        👉
        <a href="https://dil2.bankofbaroda.co.in/pl/?utm_source=google&utm_medium=paidsearch&utm_campaign=BoB_CRAYONS_PL_pl_always&gclid=CjwKCAjwyaWZBhBGEiwACslQo1xP87MhLZp2oX2sgrcHT2uPcByWxw9ENP7uniYF55a6hRd2jtxe_xoCtVIQAvD_BwE">
          click here
        </a>{" "}
        for applying for personal loan
        <br />
        <br />
        Feel free to talk for further clarification🙂
      </div>
    ),
  },
];
