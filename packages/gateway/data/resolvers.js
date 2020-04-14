const mockMails = [
  {
    subject: 'Email test 1',
    receiver: 'test1@test.com',
    content: 'Hello1'
  },
  {
    subject: 'Email test 2',
    receiver: 'test2@test.com',
    content: 'Hello2'
  },
  {
    subject: 'Email test 3',
    receiver: 'test3@test.com',
    content: 'Hello3'
  }
]

exports.resolvers = {
  Query: {
    mails: () => mockMails,
    mail: (_, args) => console.log(args)
  },
  Mutation: {
    mail: (_, args) => {
      mockMails[1] = args;

      return args;
    }
  }
};