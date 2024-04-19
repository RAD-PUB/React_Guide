/* eslint-disable react/prop-types */
const Confirm = ({closeModal}) => {
  return (
    <div className="modal mini-modal">
      <div className="modal-bg"></div>
      <div className="modal-container">
        <div className="modal-hd">
          <h2 className="modal-ttl">confirm</h2>
          <button
            className="btn btn-close"
            onClick={closeModal}
          >
            모달 닫기 버튼
          </button>
        </div>
        <div className="alert-conts-wrapper">
          <h3 className="alert-cont">confirm 입니다.</h3>
          <div className="btns-wrap">
            <button
              className="btn btn-m btn-main"
              onClick={closeModal}
            >
              예
            </button>
            <button
              className="btn btn-m btn-bd-main"
              onClick={closeModal}
            >
              아니오
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm