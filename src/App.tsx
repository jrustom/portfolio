import './App.css'

function App() {

  const handlePDFClick = () => {
    const imageURL = 'resume.pdf';
    window.open(imageURL, '_blank')
  }

  return (
    <div className='flex flex-col ml-1'>
      <p className='bracket'>&#123;</p>

      <div className='flex flex-row mt-5 ml-5'>
        <q className='text-4xl'>Hey! I'm Jason</q>
        <p className='text-3xl'>:</p>
        <q className='text-4xl'>but you can call me JSON</q>
        <p className='leading-10 text-2xl'>,</p>
      </div>

      {/* Links */}
      <p className='mt-5' ><q>Links</q>:</p>
      <p className='bracket'>&#123;</p>
      <div className='flex flex-row'>
        <p><q>LinkedIn</q>:</p>
        <a target='_blank' href='https://linkedin.com/in/jasonrustom'><q>https://linkedin.com/in/jasonrustom</q>,</a>
      </div>

      <div className='flex flex-row'>
        <p><q>GitHub</q>:</p>
        <a target='_blank' href='https://github.com/jrustom'><q>https://github.com/jrustom</q>,</a>
      </div>

      <div className='flex flex-row'>
        <p><q>Resume</q>:</p>
        <a className='cursor-pointer' onClick={handlePDFClick}><q>PDF</q>,</a>
      </div>

      <p className='bracket'>&#125;,</p>

      {/* Education */}
      <p><q>Education</q>:</p>
      <p className='bracket'>&#123;</p>
      <p><q>School</q>:</p>
      <p><q>Degree</q>:</p>
      <p><q>GPA</q>:</p>
      <p className='bracket'>&#125;,</p>

      {/* Experience */}
      <p><q>Experience</q>: [</p>
      <p className='bracket'>&#123;</p>
      <p><q>Company</q>:</p>
      <q>Position:</q>
      <q>Description:</q>
      <p className='bracket'>&#125;,</p>

      <p className='bracket'>&#123;</p>
      <q>Company:</q>
      <q>Position:</q>
      <q>Description:</q>
      <p className='bracket'>&#125;],</p>

      {/* Projects */}
      <p><q>Projects</q>:</p>
      <p className='bracket'>&#123;</p>

      <p className='bracket'>&#125;</p>
    </div>
  )
}

export default App
