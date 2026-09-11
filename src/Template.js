import './HomePage.css';

function HomePage() {
  return (
    <div className='bg-bg h-screen w-screen home-container'>
      <header className='text-center'>
        <h1 className='font-heading text-text text-4xl pt-10'>Hi guys</h1>
        <span className='font-heading color-effect text-3xl'>wazzzaaaap</span>
        <div className='flex flex-row items-center my-4'>
          <p className='m-4 p-6 bg-primary bg-opacity-50 rounded-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
            <br/><br/> Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. 
            <br/><br/> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
          </p>
          <img src={logo} className='p-2 h-[400px]' alt="profile"/>
        </div>
      </header>
      <div className='flex flex-row justify-around'>
        <div className='bg-primary p-40 rounded-lg'>text</div>
        <div className='bg-secondary p-40 rounded-lg'>text</div>
        <div className='bg-accent p-40 rounded-lg'>text</div>
      </div>
    </div>
  );
}

export default HomePage;
