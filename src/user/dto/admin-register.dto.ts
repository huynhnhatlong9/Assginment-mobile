import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, MinLength, MaxLength } from 'class-validator';
import { RolesType } from 'src/shared/roles-type.enum';
export class AdminRegisterDto {
    @ApiProperty()
    @IsNotEmpty()
    readonly username: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    //@Matches(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)
    readonly email: string;
    @ApiProperty()
    @IsNotEmpty()
    @MinLength(8, { message: ' The min length of password is 8 ' })
    @MaxLength(20, {
        message: " The password can't accept more than 20 characters ",
    })
    // @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/,
    //     { message: " A password at least contains one numeric digit, one supercase char and one lowercase char" }
    // )
    readonly password: string;
    @ApiProperty()
    @IsNotEmpty()
    readonly firstname?: string;
    @ApiProperty()
    @IsNotEmpty()
    readonly lastname?: string;
    roles: RolesType[];
}
