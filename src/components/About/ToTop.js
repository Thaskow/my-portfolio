import backToTop from '../../assets/images/back-to-top.png';

function ToTop() {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


  return (
    <div className="to-top">
      <a onClick={scrollToTop}>
          <div className="text">
              <div className="text-part">Back to</div>
              <div className="text-part">the top</div>
          </div>
          <div className="arrow-up">
              <img src={backToTop} alt=""/>
          </div>
      </a>
    </div>
  );
}

export default ToTop;