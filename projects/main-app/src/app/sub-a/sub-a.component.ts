import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-a',
  templateUrl: './sub-a.component.html',
  styleUrls: ['./sub-a.component.less']
})
export class SubAComponent {
  url = `http://localhost:4201/sub-app/`

  microAppData = {msg: '来自基座的数据'}

  ngOnInit (): void {
  }

  handleCreate (): void {
    console.log('child-angular 创建了')
  }

  handleBeforeMount (): void {
    console.log('child-angular 即将被渲染')
  }

  handleMount (): void {
    console.log('child-angular 已经渲染完成')

    setTimeout(() => {
      this.microAppData = {msg: '来自基座的新数据'}
    }, 2000)
  }

  handleUnmount (): void {
    console.log('child-angular11 卸载了')
  }

  handleError (): void {
    console.log('child-angular11 加载出错了')
  }

  handleDataChange (e: any): void {
    console.log('来自子应用 child-angular 的数据:', e.detail.data)
  }
}
