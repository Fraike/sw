import wepy from 'wepy'

export function redierct(val) {
    wepy.navigateTo({
      url: val
    });
  }