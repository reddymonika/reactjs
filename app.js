import userProfile from './components/userProfile/index'

const userDetails = [
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Varun',
    role: 'Software Developer',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Varun',
    role: 'Software Developer',
  },
]

const App = () => <userProfile userDetails={userDetails} />
export default App
