import { Avatar } from "../../shared/Avatar/Avatar.component";
import * as S from "./CargoCard.styles";

export const CargoCard = () => {
    return (
        <S.WrapperCard>
            <S.WrapperInfoBlock>
                <div style={{display: "flex"}}>
                    <div style={{flexGrow: "1"}}>
                        <p>Статус груза</p>
                        <p>Дата поступления груза в порт</p>
                        <p>Менеджер</p>
                        <p>Грузоотправитель</p>
                    </div>
                    <div style={{flexGrow: "1"}}>
                        <p>
                            <select>
                                <option>1</option>
                            </select>
                        </p>
                        <p>29.06.2021</p>
                        <p>Иванов Иван Иванович</p>
                        <p>ООО “Компания”</p>
                    </div>
                    <div style={{flexGrow: "1"}}>
                        <p>.</p>
                        <p>Закрепленный заказ</p>
                        <p>Доставка груза до порта отправления</p>
                        <p>.</p>
                        
                    </div>
                    <div style={{flexGrow: "1"}}>
                        <p>.</p>
                        <p><a href="#">Заказ №4329</a></p>
                        <p>Автомобиль</p>
                        <p>.</p>
                    </div>
                </div>
                <hr></hr>
                <div style={{display: "flex"}}>
                    <div style={{flexGrow: "1"}}>
                        <p>Тип контейнера</p>
                        <p>Общий объем, м3</p>
                        <p>Высота, метры</p>
                    </div>
                    <div style={{flexGrow: "1"}}>
                        <p>240' High Cube</p>
                        <p>43,481</p>
                        <p>29,820</p>
                    </div>
                    <div style={{flexGrow: "1"}}>
                        <p>Масса, тн</p>
                        <p>Длина, метры</p>
                        <p>Ширина, метры</p>
                    </div>
                    <div style={{flexGrow: "1"}}>
                        <p>5,355</p>
                        <p>12,844</p>
                        <p>3,620</p>
                    </div>
                </div>
                <div>
                    <div>Описание груза</div>
                    <div>
                        Следует отметить, что понимание сути ресурсосберегающих технологий обеспечивает актуальность как 
                        самодостаточных, так и внешне зависимых концептуальных решений. В своём стремлении улучшить 
                        пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира неоднозначны и 
                        будут призваны к ответу. Внезапно, базовые сценарии поведения пользователей набирают популярность 
                        среди определенных слоев населения, а значит, должны быть описаны максимально подробно. Задача 
                        организации, в особенности же выбранный нами инновационный путь, а также свежий взгляд на привычные 
                        вещи - безусловно открывает новые горизонты для новых принципов формирования материально-технической 
                        и кадровой базы.
                    </div>
                </div>
                <hr></hr>
                <div style={{display: "flex"}}>
                    <div style={{flexGrow: "1"}}>
                        <p>ТМЦ</p>
                        <p>Расположение груза в порту</p>
                    </div>
                    <div style={{flexGrow: "1"}}>
                        <p>Опора промежуточная</p>
                        <p>3 скл причал</p>
                    </div>
                    <div style={{flexGrow: "1"}}>
                        <p>Фрахтовая единица</p>
                        <p></p>
                    </div>
                    <div style={{flexGrow: "1"}}>
                        <p>5,355 (Масса, тн)</p>
                        <p></p>
                    </div>
                </div>
                <div>
                    <div>Файл транспортной накладной</div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div style={{display: "flex"}}>
                            <div>Накладная_для_Умки (1).doc</div>
                            <div>от 24.10.2021</div>
                            <div>
                                <button>Заказ №4329</button>
                            </div>
                        </div>
                        <div style={{display: "flex"}}>
                            <button>D</button>
                            <button>C</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>Файл приемного акта</div>
                    <div>
                        <button>Добавить</button>
                    </div>
                </div>
                <div style={{display: "flex"}}>
                    <div>Номер приемного акта</div>
                    <div>21085-Т</div>
                    <div></div>
                    <div></div>
                </div>
                <div style={{display: "flex"}}>
                    <div>
                        <button>редактировать</button>
                    </div>
                    <div>
                        <button>разделить груз</button>
                    </div>
                </div>
            </S.WrapperInfoBlock>
            <S.WrapperUserBlock>
                <div style={{textAlign: "center", flexGrow: "1"}}>
                    Пользователь<br></br>
                    <Avatar size={100} icon={<>NN</>} /><br></br>
                    Иванов Иван<br></br>
                    example@mail.ru<br></br>
                    +7 (927) 777-55-55
                </div>
            </S.WrapperUserBlock>
        </S.WrapperCard>
    );
};