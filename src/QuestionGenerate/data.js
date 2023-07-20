const options = [
    { value: 'programming', label: 'Programming' },
    { value: 'mcq', label: 'Mcq' },
    { value: 'descreptive', label: 'Descreptive' },
];

const Technology = [
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'javascript', label: 'Javascript' },
];

const options2 = [
    {value: 'Agent', label: "Agent"},
    {value: 'condidate', label: "Condidate"}
]

const options3 = [
    {value: 'pre InterView', label: "Pre InterView"},
    {value: 'post Interview', label: "Post Interview"}
]

const rows = [

  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 170 },
    { field: 'questiontitel', headerName: 'QuestionTitel', width: 300 },
    { field: 'questionLavel', headerName: 'QuestionLavel ', width: 200 },
    { field: 'QuestionType', headerName: 'QuestioType ', width: 200 },
  
  ];

export{options,options2,options3,rows,columns,Technology}