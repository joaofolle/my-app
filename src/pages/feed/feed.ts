import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public nomeUsuario:string = "João Folle do Codigo";
  public feedObject ={
    titulo: "Charles Franca",
    data: "12 de setembro de 2018",
    descricao:"Esta é uma descrição",
    likes: 12,
    comments: 5,
    hora_comments: "18:00"
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider
    ) {
  }

  public somaDoisNumeros(num1:number, num2:number): void{
    alert(num1 + num2)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        console.log(data)
      }, error => {
        console.log(error)
      }
    )
  }

}
