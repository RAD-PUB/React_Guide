/* eslint-disable react/prop-types */
const Alert = ({closeModal}) => {
  return (
    <div className="modal mini-modal">
      <div className="modal-bg"></div>
      <div className="modal-container">
        <div className="modal-hd">
          <h2 className="modal-ttl">Alert</h2>
          <button
            className="btn btn-close"
            onClick={closeModal}
          >
            모달 닫기 버튼
          </button>
        </div>
        <div className="alert-conts-wrapper">
          <h3 className="alert-cont">alert 입니다.</h3>
          <div className="btns-wrap">
            <button
              className="btn btn-m btn-main"
              onClick={closeModal}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alert