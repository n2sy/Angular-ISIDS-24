import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const addtokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req);

  let token = localStorage.getItem('token');
  if (token) {
    let cloneReq = req.clone({
      headers: new HttpHeaders().set('Authorization', `bearer ${token}`),
    });
    console.log(cloneReq);

    return next(cloneReq);
  }

  return next(req);
};
