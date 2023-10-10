import "../../styles/EditProduct.css";
import Back from "../../img/back.png";
import { useRef } from "react";

const EditProduct = () => {
  const FileSelect = useRef("");

  const BackMain = () => {
    window.location.replace("/");
  };

  const Upload = () => {
    alert("작성되었습니다.");
  };

  return (
    <div className='EditProductWrap'>
      <div className='PageInfo'>
        <img src={Back} className='back' onClick={BackMain} />
        <div className='PageTitle'>게시물 수정</div>
      </div>
      <form method='get'>
        <div className='UploadProductInfo'>
          <input type='file' style={{ display: "none" }} ref={FileSelect} />
          <button className='SelectImage' onClick={() => FileSelect.current.click()}>
            사진 첨부하기
          </button>
          <input type='text' className='InputTitle' placeholder='제목을 입력하세요' />
          <input type='text' className='InputLink' placeholder='링크를 입력하세요' />
          <input type='text' className='InputPrice' placeholder='가격를 입력하세요' />
          <input type='text' className='InputMember' placeholder='참여인원을 입력하세요' />
          <input type='text' className='InputContent' placeholder='내용을 작성하세요' />
          <button className='UploadProductBtn' type='submit' onClick={Upload}>
            수정 완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
