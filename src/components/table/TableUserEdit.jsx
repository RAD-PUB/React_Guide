function TableUserEdit() {
  return (
    <>
    
    <div className="custom-table-container">
            <p className="custom-table-container-ttl">기본 정보</p>
            <div className="custom-table-wrap">
              {/* <!-- 회원 상태, 회원 유형 --> */}
              <div className="custom-table-row half-size">
                {/* <!-- start:: input with select --> */}
                <h3 className="custom-table-ttl">회원 상태</h3>
                <div className="custom-table-desc">
                  <div className="inp-wrap">
                    <div className="inp-grp">
                      <label htmlFor="user-status" className="inp-label"
                        >상태 선택</label
                      >
                      <select
                        name="user-status"
                        id="user-status"
                        className="input inp-select"
                      >
                        <option value="활성" selected>활성</option>
                        <option value="비활성">비활성</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* <!-- end:: input with select --> */}
              </div>
              <div className="custom-table-row half-size">
                {/* <!-- start:: input with select --> */}
                <h3 className="custom-table-ttl">회원 유형</h3>
                <div className="custom-table-desc">
                  <div className="inp-wrap">
                    <div className="inp-grp">
                      <label htmlFor="user-sort" className="inp-label">유형 선택</label>
                      <select
                        name="user-sort"
                        id="user-sort"
                        className="input inp-select"
                      >
                        <option value="관리자" selected>
                          관리자
                        </option>
                        <option value="회원">회원</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* <!-- end:: input with select --> */}
              </div>

              <div className="custom-table-row full-size">
                <div className="custom-table-rowspan-cellhalf">
                  <div className="custom-table-row custom-table-rowspan4">
                    <h3 className="custom-table-ttl">프로필 사진</h3>
                    <div className="custom-table-desc">
                      <div className="image-uplomanage-wrap">
                        <picture className="img-wrap">
                          {/* <img
                            src=""
                            alt="프로필 사진"
                          /> */}
                        </picture>
                        <div className="inp-grp">
                          <label
                            htmlFor="profile-upload"
                            className="inp-file-label-field input inp-txt"
                            >파일명파일명파일명파일명파일명파일명파일명.jpg</label
                          >
                          <label
                            htmlFor="profile-upload"
                            className="inp-file-label-btn btn btn-l btn-basic"
                            >파일 찾기</label
                          >
                          <input
                            type="file"
                            id="profile-upload"
                            name="file-upload"
                            className="input inp-file"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-table-rowspan-cellhalf">
                  <div className="custom-table-row full-size">
                    <h3 className="custom-table-ttl">회원 이메일</h3>
                    <div className="custom-table-desc">
                      <div className="inp-grp">
                        <label htmlFor="user-email" className="inp-label"
                          >회원 이메일</label
                        >
                        <input
                          type="text"
                          id="user-email"
                          name="user-email"
                          className="input inp-txt"
                          placeholder="찾으시려는 내용을 입력해주세요."
                          value="abcd1111@aaaa.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="custom-table-row full-size">
                    <h3 className="custom-table-ttl">전화번호</h3>
                    <div className="custom-table-desc">
                      <div className="inp-grp">
                        <label htmlFor="user-tel" className="inp-label">전화번호</label>
                        <input
                          type="text"
                          id="user-tel"
                          name="user-tel"
                          className="input inp-txt"
                          placeholder="찾으시려는 내용을 입력해주세요."
                          value="010-1234-5678"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="custom-table-row full-size">
                    <h3 className="custom-table-ttl">이름</h3>
                    <div className="custom-table-desc">
                      <div className="inp-grp">
                        <label htmlFor="user-name" className="inp-label">이름</label>
                        <input
                          type="text"
                          id="user-name"
                          name="user-name"
                          className="input inp-txt"
                          placeholder="찾으시려는 내용을 입력해주세요."
                          value="홍길동"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="custom-table-row full-size">
                    <h3 className="custom-table-ttl">가입 일시(IP)</h3>
                    <div className="custom-table-desc">
                      <div className="inp-grp">
                        <label htmlFor="rego-date" className="inp-label"
                          >가입 일시(IP)</label
                        >
                        <input
                          type="text"
                          id="rego-date"
                          name="rego-date"
                          className="input inp-txt"
                          placeholder="찾으시려는 내용을 입력해주세요."
                          value="2022.10.28 17:23:22 (192.168.0.19)"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="custom-table-row full-size">
                <div className="custom-table-rowspan-cellhalf">
                  <div className="custom-table-row custom-table-rowspan-2input">
                    <h3 className="custom-table-ttl">주소</h3>
                    <div className="custom-table-desc">
                      <div className="address-wrap">
                        <div className="inp-grp">
                          <label htmlFor="company-address" className="inp-label"
                            >주소(사업장)</label
                          >
                          <input
                            type="text"
                            id="company-address"
                            name="company-address"
                            className="input inp-txt"
                            placeholder="우편 번호를 검색하세요."
                            disabled
                          />
                          <button className="btn btn-l btn-basic">우편 검색</button>
                          <label htmlFor="company-add-detail" className="inp-label"
                            >주소</label
                          >
                          <input
                            type="text"
                            id="company-add-detail"
                            name="company-add-detail"
                            className="input inp-txt"
                            placeholder="주소를 입력하세요."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-table-rowspan-cellhalf">
                  <div className="custom-table-row custom-table-rowspan-2input">
                <h3 className="custom-table-ttl">종류</h3>
                <div className="custom-table-desc">
                  <div className="inp-grp chck-grp">
                    <input
                      type="radio"
                      id="company-corp"
                      name="company-sort"
                      className="inp-radio d-none"
                    />
                    <label htmlFor="company-corp" className="radio-icon">법인</label>
                    <label htmlFor="company-corp" className="radio-txt">법인</label>
                  </div>
                  <div className="inp-grp chck-grp">
                    <input
                      type="radio"
                      id="company-personal"
                      name="company-sort"
                      className="inp-radio d-none"
                    />
                    <label htmlFor="company-personal" className="radio-icon"
                      >개인</label>
                    <label htmlFor="company-personal" className="radio-txt">개인</label>
                  </div>
                </div>
                  </div>
                </div>
              </div>

              <div className="custom-table-row full-size search-btn-wrap"></div>
            </div>
            {/* <!-- end search custom table --> */}
          </div>
    </>
  );
}

export default TableUserEdit;
