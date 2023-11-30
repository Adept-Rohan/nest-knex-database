import { Module, Global } from '@nestjs/common';
import { MeetingKnexProvider } from './meetingKnexProvider';

@Global()
@Module({
  providers: [MeetingKnexProvider],
  exports: [MeetingKnexProvider],
})
export class KnexModule {}
