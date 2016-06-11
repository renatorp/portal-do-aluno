import { Component } from '@angular/core';
import { AlunoService } from '../service/aluno-service';
import { BasePage } from '../base/base';


@Component({
  template: `
<base>
  <content>
  <div id="page-wrapper">
<div class="container-fluid">

     <!-- Page Heading -->
     <div class="row">
         <div class="col-lg-12">
             <h1 class="page-header">
                 Home
             </h1>
             <ol class="breadcrumb">
                 <li class="active">
                     <i class="fa fa-home"></i> Home
                 </li>
             </ol>
         </div>
     </div>
     <!-- /.row -->

</div>
<!-- /.container-fluid -->
</div>
 </content>
<base>
  `,
  directives: [BasePage]
})
export class HomePortal  {
}