const msgs = [
  "first Msg",
  "Second Msg",
  "Third Msg",
  "Forth Msg",
  "Fifth Msg",
  "Sixth Msg",
];
const contacts = [
  {
    firstName: "test 01",
    lastName: "Ltest 01",
    phoneNumber: "01111411",
    subs: false,
    tempId: 0,
  },
  {
    firstName: "test 02",
    lastName: "Ltest 02",
    phoneNumber: "01111411",
    subs: true,
    tempId: 1,
  },
  {
    firstName: "test 03",
    lastName: "Ltest 03",
    phoneNumber: "01111411",
    subs: false,
    tempId: 2,
  },
  {
    firstName: "test 04",
    lastName: "Ltest 04",
    phoneNumber: "01111411",
    subs: true,
    tempId: 3,
  },
  {
    firstName: "test 05",
    lastName: "Ltest 05",
    phoneNumber: "01111411",
    subs: true,
    tempId: 4,
  },
  {
    firstName: "test 06",
    lastName: "Ltest 06",
    phoneNumber: "01111411",
    subs: false,
    tempId: 5,
  },
];
const sampleTest = () => {
  contacts.forEach(c => {
    if (c.subs) {
      console.log(`Subscription of Mr ${c.firstName} is ${c.subs} So this is the special message for you ${msgs[c.tempId]}\n`)
    }
  });
};
sampleTest();
