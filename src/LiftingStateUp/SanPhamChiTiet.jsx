const SanPhamChiTiet = (props) => {
  const { spChiTiet } = props;
  return (
    <div className="container mx-auto flex gap-5">
      <div>
        <h3>{spChiTiet.tenSP}</h3>
        <img src={spChiTiet.hinhAnh} alt="" className="w-[70%]" />
      </div>
      <div>
        <h3>thông số kỹ thuật</h3>
        <table>
          <tbody>
            <tr>
              <td>màn hình</td>
              <td>{spChiTiet.manHinh}</td>
            </tr>
            <tr>
              <td>hệ điều hành</td>
              <td>{spChiTiet.heDieuHanh}</td>
            </tr>
            <tr>
              <td>Camera trước</td>
              <td>{spChiTiet.cameraTruoc}</td>
            </tr>
            <tr>
              <td>Camera sau</td>
              <td>{spChiTiet.cameraSau}</td>
            </tr>
            <tr>
              <td>RAM</td>
              <td>{spChiTiet.manHinh}</td>
            </tr>
            <tr>
              <td>ROM</td>
              <td>{spChiTiet.rom}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SanPhamChiTiet;
