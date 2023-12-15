import {create} from 'zustand';


const useModalVisible = create((set) => ({
  open: true,
  
  close: () => set((state) => ({open: state.open = false})),
}));



export {useModalVisible};