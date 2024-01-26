import sendMessage from '../../assets/images/send-message.png';

function SendMessage () {
  return (


      <div className="send-message">
          <a href="#sendMail">
        <div className="image">
            <img src={sendMessage} alt=""/>
        </div>
        <div className="text-first">
            <div className="split-text">Me contacter ?</div>
            <div className="split-text">Envoi un message.</div>
            <div className="mail">
                <div className="mail-text">
                    lucas.surma@hotmail.com
                </div>
            </div>
        </div>

          </a>
      </div>

  )
}

export default SendMessage;