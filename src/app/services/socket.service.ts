import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  joinRoom(room: string): void {
    this.socket.emit('joinRoom', room);
  }

  sendMove(room: string, move: any): void {
    this.socket.emit('move', { room, move });
  }

  onMove(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('move', (move) => {
        observer.next(move);
      });
    });
  }
}
