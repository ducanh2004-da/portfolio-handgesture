import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// Nhận các props từ AboutPage truyền xuống
export default function DialogCard({ open, onClose, member }: any) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {/* Hiển thị tên thành viên động */}
        {member ? `Thông tin: ${member.name}` : 'Member Details'}
      </DialogTitle>
      
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Vai trò: {member?.role}
          <br /><br />
          Đây là nơi bạn có thể hiển thị thêm mô tả chi tiết, kỹ năng hoặc thông tin cá nhân của thành viên này.
        </DialogContentText>
      </DialogContent>
      
      <DialogActions>
        <Button onClick={onClose} autoFocus>
          Đóng
        </Button>
      </DialogActions>
    </Dialog>
  );
}