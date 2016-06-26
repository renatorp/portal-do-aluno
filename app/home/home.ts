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

      <div class="jumbotron">
          <h1>Bem Vindo!</h1>
          <p>Possíveis informativo/avisos ao aluno/professor nesta parte.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum nisl quis justo elementum, id vehicula mi pulvinar. Aenean eget turpis volutpat, volutpat nibh vel, rutrum nisl. Nunc eu ornare sem. Aliquam nunc urna, tristique vitae ornare ac, molestie ac quam. In hac habitasse platea dictumst. Fusce facilisis, enim a porta aliquet, dui enim egestas augue, non eleifend turpis erat at dolor. Sed ultrices risus eu ante tincidunt, at rhoncus nunc molestie.</p>
      </div>

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