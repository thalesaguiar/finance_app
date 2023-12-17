import {create} from 'zustand';

const useModalStore = create((set) => ({
  modalVisible: false,
  toggleModal: () => set((state) => ({ modalVisible: !state.modalVisible })),
}));

export default useModalStore;