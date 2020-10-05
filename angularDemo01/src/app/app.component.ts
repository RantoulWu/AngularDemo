import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // if find <app-root>,will change it to template
  templateUrl: './app.component.html',
  // template: '<h1>template for inlineurl</h1>'
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng10demo';
  link = 'www.google.com';
  address = {
    state: 'California',
    city: 'Los Angeles'
  };
  // setTimeout(); class 中定义，不实现
  constructor() {
    // 关于箭头函数 参考 ：https://www.liaoxuefeng.com/wiki/1022910821149312/1031549578462080
    // 1.写法1 使用普通函数
    //  setTimeout(function:void(){
    //    this.title;
    // });
    // 由于JavaScript函数对this绑定的处理机制
    // this 此时指向了global 或者 undefined（under strict-mode）
    // 2.写法2 使用 箭头函数
    // why this can work? compared with upper 写法?
    setTimeout(() => {
      this.title = 'abc';
      // 箭头函数修复了this的指向，this总是指向词法作用域，也就是外层调用者：
    }, 2000);

  }
  handleClick(): void {
    this.title = 'button is clicked';
    // angular will use Appcomponent to call onclick
  }
  handleInput(event): void {
    this.title = event.target.value;
  }
}

// jit: just in time compiler: will compile angular code in browser at runtime
// AOT ahead of time compiler: will compile angular code at build time
// 如何查看是compile 好的还是没好的？ view page source
// how to trigger AOT?
// ng serve --aot, ng build --aot, ng build --prod

