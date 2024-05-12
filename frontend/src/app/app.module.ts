import { UserService } from './services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';    
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import {MatStepperModule} from '@angular/material/stepper';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { ReclamationFormComponent } from './reclamation-form/reclamation-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NavComponent,
    UserComponent,
    AdminComponent,
    ConfirmationDialogComponent,
    VerifyAccountComponent,
    PasswordRecoveryComponent,
    ReclamationFormComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    NgChartsModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    RouterModule,
    MatExpansionModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatSnackBarModule,
    Ng2SearchPipeModule,
    MatProgressSpinnerModule,
    MatStepperModule,


    
    ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
