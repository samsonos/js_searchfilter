<?php
namespace samson\js\searchfilter;

/**
 * Интерфейс для подключения модуля в ядро фреймворка SamsonPHP
 *
 * @package SamsonPHP
 * @author Vitaly Iegorov <vitalyiegorov@gmail.com>
 * @author Nikita Kotenko <nick.w2r@gmail.com>
 * @version 0.1
 */
class SearchFilter extends \samson\core\CompressableExternalModule
{
    /** Identifier */
    protected $id = 'searchfilter';

    /** Module dependencies */
    protected $requirements = array('SamsonJS');
}