import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { getUsersService } from '../services/user'

const result = {
  data: [
    {
      _id: '630c97058014153ff12ef22b',
      name: "Chris's ",
      description: "A place where My Hero Academia fan's can relax and talk about the anime.",
      category: 'Science',
      admin: {
        _id: '63256dd1f3ebbc0fd39608e2',
        username: 'christan',
        email: 'christanf6@gmail.com',
      },
      members: [
        { _id: '630ca8f6cdd40fc5579d067a', username: 'christan', email: 'it20610302@my.sliit.lk' },
        { _id: '630ddcbdabee3288c8e682e3', username: 'pete', email: 'peterparker@gmail.com' },
      ],
      created_at: '2022-08-29T10:37:57.300Z',
      updated_at: '2022-10-22T12:01:30.148Z',
      details:
        "Welcome to the space!\nWelcome to the BNHA: My Hero Academia space\nThis is a fabulous My Hero Academia space that any MHA fan can enjoy!\nRules. Be respectful to the other members in the space, I understand there'll be disagreements occurring in the community but please refrain from any sort of harassment or negative response towards that individual. Please keep My Hero Academia related post only, after all this is a MHA space.\nPlease put “Spoilers” or “Warning Manga Spoilers” in the title when revealing something from the My Hero Academia manga.\nBy breaking any of these rules will be reviewed by the Admin, which may result in a ban.",
      iconImage:
        'https://firebasestorage.googleapis.com/v0/b/edupox-fa864.appspot.com/o/circle%2Fall-might.jpg9a59c8e1-94ba-42ad-b9fe-708a1d2a010c?alt=media&token=a5f3c4dc-5169-4afb-a9f5-04358f6e2917',
      coverImage:
        'https://firebasestorage.googleapis.com/v0/b/edupox-fa864.appspot.com/o/circle%2Fbnha_cover.jpgb19c350b-3c5d-4074-955b-7014e37ed236?alt=media&token=d4f8885d-9471-4b35-9eef-533529d5cd79',
    },
    {
      _id: '630cb7de393840d0fe3cecc2',
      name: 'TechTalks',
      description: "Let's talk about technology",
      category: 'Technology',
      admin: {
        _id: '63256dd1f3ebbc0fd39608e2',
        username: 'christan',
        email: 'christanf6@gmail.com',
      },
      members: [
        { _id: '630ddcbdabee3288c8e682e3', username: 'pete', email: 'peterparker@gmail.com' },
        { _id: '631b42c8f24d13506bc2e98e', username: 'nimtara', email: 'nnbm24@gmail.com' },
      ],
      created_at: '2022-08-29T12:58:06.885Z',
      updated_at: '2022-10-21T12:38:04.806Z',
      iconImage: 'https://picsum.photos/id/200/200/300',
      coverImage: 'https://images4.alphacoders.com/100/1003567.jpg',
      details:
        "Hi there,\n\nYou're welcome to join together with us.\n\nThis space is for those who are new or who have already an advancement in technology. If you love technology in any form it may present itself, then you're truly at the right place.",
    },
    {
      _id: '631b71c9f24d13506bc33128',
      name: 'Mathematics',
      description: 'I love Maths',
      category: 'Science',
      admin: { _id: '630ddcbdabee3288c8e682e3', username: 'pete', email: 'peterparker@gmail.com' },
      members: [
        { _id: '63256dd1f3ebbc0fd39608e2', username: 'christan', email: 'christanf6@gmail.com' },
        { _id: '631b42c8f24d13506bc2e98e', username: 'nimtara', email: 'nnbm24@gmail.com' },
      ],
      created_at: '2022-09-09T17:03:05.642Z',
      updated_at: '2022-10-22T03:50:38.126Z',
    },
    {
      _id: '631b7430f24d13506bc3315b',
      name: 'TechTalk',
      description: 'Science',
      category: 'Science',
      admin: { _id: '630ddcbdabee3288c8e682e3', username: 'pete', email: 'peterparker@gmail.com' },
      members: [
        { _id: '63256dd1f3ebbc0fd39608e2', username: 'christan', email: 'christanf6@gmail.com' },
      ],
      created_at: '2022-09-09T17:13:20.474Z',
      updated_at: '2022-10-22T12:04:08.535Z',
    },
    {
      _id: '631b7922f24d13506bc3318e',
      name: 'Academia',
      description: 'This hub is dedicated for research students',
      category: 'Science',
      admin: { _id: '630ddcbdabee3288c8e682e3', username: 'pete', email: 'peterparker@gmail.com' },
      members: [],
      created_at: '2022-09-09T17:34:26.585Z',
      updated_at: '2022-09-21T17:12:10.065Z',
    },
    {
      _id: '631f635bb4d3aec919402300',
      name: 'Cat lovers',
      description: 'WE love CATS!!!',
      category: 'Health & Fitness',
      admin: { _id: '631b42c8f24d13506bc2e98e', username: 'nimtara', email: 'nnbm24@gmail.com' },
      members: [],
      created_at: '2022-09-12T16:50:35.659Z',
      updated_at: '2022-10-21T08:01:29.225Z',
      iconImage:
        'https://firebasestorage.googleapis.com/v0/b/edupox-fa864.appspot.com/o/circle%2Fcat-avatar.jpg4df1ef22-6874-4263-a1ba-1a9c73daa1bb?alt=media&token=15dd666d-f9a7-4104-b4e3-c92e8c8208a5',
      coverImage:
        'https://firebasestorage.googleapis.com/v0/b/edupox-fa864.appspot.com/o/circle%2Fcat-cover.jpgbd6c8ccc-840a-4d9f-9690-d0e70b01c31b?alt=media&token=9b3374e6-3206-4be4-8baa-1709a925dcdf',
    },
    {
      _id: '634c506034b4eb1971e78012',
      name: 'Jobless People',
      description: '',
      category: 'Business',
      admin: {
        _id: '630b03727daa50e3f813c85e',
        username: 'sayumiiiii',
        email: 'sayumimunasinghe@hotmail.com',
      },
      members: [],
      created_at: '2022-10-16T18:41:36.926Z',
      updated_at: '2022-10-16T18:41:36.926Z',
    },
    {
      _id: '634ecebae74da7315fe43e1c',
      name: 'Fun Times',
      description: 'Fun times',
      category: 'Science',
      admin: {
        _id: '630b03727daa50e3f813c85e',
        username: 'sayumiiiii',
        email: 'sayumimunasinghe@hotmail.com',
      },
      members: [],
      created_at: '2022-10-18T16:05:14.373Z',
      updated_at: '2022-10-21T09:39:40.753Z',
    },
    {
      _id: '63522dd56e576db54c6f4ac6',
      name: 'Book Jellyfish',
      description: 'Open to anyone who loves to read books!',
      category: 'Arts & Design',
      admin: { _id: '631b42c8f24d13506bc2e98e', username: 'nimtara', email: 'nnbm24@gmail.com' },
      members: [
        { _id: '630ddcbdabee3288c8e682e3', username: 'pete', email: 'peterparker@gmail.com' },
      ],
      created_at: '2022-10-21T05:27:49.075Z',
      updated_at: '2022-10-21T11:22:13.205Z',
    },
    {
      _id: '63528a98dbc7092b84c4d900',
      name: 'Luminaries',
      description: 'Test Luminaries',
      category: 'Arts & Design',
      admin: {
        _id: '630b03727daa50e3f813c85e',
        username: 'sayumi munas',
        email: 'sayumimunasinghe@hotmail.com',
      },
      members: [],
      created_at: '2022-10-21T12:03:37.229Z',
      updated_at: '2022-10-21T12:04:16.335Z',
      iconImage:
        'https://firebasestorage.googleapis.com/v0/b/edupox-fa864.appspot.com/o/circle%2F2015-Ford-Mustang-GT-red-at-NAIAS-2014.jpgf55464b4-5301-43c4-b11b-47f3b7504474?alt=media&token=a4169395-b154-449e-9db8-c66f544176f6',
      coverImage:
        'https://firebasestorage.googleapis.com/v0/b/edupox-fa864.appspot.com/o/circle%2F2015-Ford-Mustang-GT-red-at-NAIAS-2014.jpg4b519932-1b10-4426-8d03-97e2c4dc27b1?alt=media&token=bfdfc026-2ab7-4b2f-bab4-f80a447dc7be',
    },
    {
      _id: '6352dfeda59601b5a3863e49',
      name: 'Tech TIps',
      description: '',
      category: 'Technology',
      admin: {
        _id: '63256dd1f3ebbc0fd39608e2',
        username: 'christan',
        email: 'christanf6@gmail.com',
      },
      members: [],
      created_at: '2022-10-21T18:07:41.249Z',
      updated_at: '2022-10-21T18:07:41.249Z',
    },
    {
      _id: '6353805080fd5e7f564d6cd0',
      name: 'sample_01',
      description: '',
      category: 'Technology',
      admin: { _id: '630ddcbdabee3288c8e682e3', username: 'pete', email: 'peterparker@gmail.com' },
      members: [
        { _id: '631b42c8f24d13506bc2e98e', username: 'nimtara', email: 'nnbm24@gmail.com' },
        { _id: '630ddcbdabee3288c8e682e3', username: 'pete', email: 'peterparker@gmail.com' },
        { _id: '63256dd1f3ebbc0fd39608e2', username: 'christan', email: 'christanf6@gmail.com' },
      ],
      created_at: '2022-10-22T05:32:00.972Z',
      updated_at: '2022-10-22T08:28:12.799Z',
    },
    {
      _id: '6353db34bb13de573557b857',
      name: 'Tech Tips',
      description: '',
      category: 'Technology',
      admin: { _id: '630ddcbdabee3288c8e682e3', username: 'pete', email: 'peterparker@gmail.com' },
      members: [],
      created_at: '2022-10-22T11:59:48.515Z',
      updated_at: '2022-10-22T11:59:48.515Z',
    },
  ],
  message: 'Circle Retrieval Successful.',
}

export const getUsers = asyncHandler(async (req, res) => {
  const result = await getUsersService()
  if (!result) return makeResponse({ res, status: 500, message: 'User Retrieval failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'User Retrieval Successful.' })
})
